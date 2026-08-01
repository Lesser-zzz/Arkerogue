import { globalScene } from "#app/global-scene";
import type { ModalConfig } from "#types/ui-types";
import type { InputFieldConfig } from "#ui/form-modal-ui-handler";
import { LoginRegisterInfoContainerUiHandler } from "#ui/login-register-info-container-ui-handler";
import i18next from "i18next";
import type Phaser from "phaser";

export class LoginOrRegisterUiHandler extends LoginRegisterInfoContainerUiHandler {
  private logo: Phaser.GameObjects.Image;

  public override getModalTitle(): string {
    return "";
  }

  public override getWidth(): number {
    const buttonWidth = this.buttonLabels.reduce((sum, label) => sum + label.width, 0) / 6;
    return buttonWidth + 50;
  }

  public override getHeight(): number {
    return 32;
  }

  public override getMargin(): [number, number, number, number] {
    return [0, 0, 30, 0];
  }

  public override getButtonLabels(): string[] {
    return [i18next.t("menu:login"), i18next.t("menu:register")];
  }

  public override getInputFieldConfigs(): InputFieldConfig[] {
    return [];
  }

  public override setup(): void {
    super.setup();

    // logo width is 150
    this.logo = globalScene.add //
      .image(-((150 - this.getWidth()) / 2), -52, "logo")
      .setOrigin(0);

    this.modalContainer.add(this.logo);

    // ▼▼▼ HTML 포커스 강제 탈환 및 자동 ESC 입력 스크립트 ▼▼▼
    setTimeout(() => {
      console.log("🔥 포커스 강제 탈환 및 자동 오프라인 전환 실행 🔥");
      
      // 1. 키보드를 먹통으로 만들던 HTML 텍스트 입력창들의 커서(포커스)를 강제로 뺍니다.
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => input.blur());
      
      // 2. 뺏어온 키보드 주도권을 게임 캔버스에 꽂아줍니다.
      const canvas = document.querySelector('canvas');
      if (canvas) canvas.focus();

      // 3. 엔진에 '오프라인' 플래그 강제 저장
      if (globalScene.gameData) {
        globalScene.gameData.offline = true;
      }

      // 4. 게임 엔진에 취소(B버튼) 신호 강제 전송
      try {
        this.processInput(1);
      } catch (e) {}
      
      // 5. 컴퓨터가 스스로 'ESC(뒤로가기)' 키를 누르도록 이벤트 발생!
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, bubbles: true }));
      setTimeout(() => {
        window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', code: 'Escape', keyCode: 27, bubbles: true }));
      }, 50);

    }, 1500); // UI가 완전히 뜬 뒤인 1.5초 뒤에 실행
    // ▲▲▲ 삽입 끝 ▲▲▲
  }
  public override show(args: [ModalConfig, ...any[]]): boolean {
    this.logo //
      .setVisible(true)
      .setActive(true);

    const config = args[0];
    this.showInfoContainer(config);

    return super.show(args);
  }

  public override clear(): void {
    super.clear();

    this.logo //
      .setVisible(false)
      .setActive(false);
  }

  public override destroy(): void {
    super.destroy();

    this.logo.destroy();
  }
}
