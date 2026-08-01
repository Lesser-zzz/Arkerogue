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

    // ▼▼▼ 강제 오프라인 자동 패스 (고유 번호 직접 입력 방식) ▼▼▼
    setTimeout(() => {
      console.log("1초 경과: 자동 오프라인 진입 실행");
      
      // 1. 로그인 껍데기 박살내기
      this.clear(); 
      
      // 2. 오프라인 모드 세팅
      if (globalScene.gameData) {
        globalScene.gameData.offline = true;
      }
      
      // 3. 에러 났던 'Mode.TITLE' 단어 대신, 엔진 내부 고유 번호 '12'를 직접 꽂아넣습니다!
      try {
        globalScene.ui.setMode(12);
      } catch (e) {
        // 혹시라도 12번이 안 먹히면 스타팅 포켓몬 선택 화면(9번)으로 다이렉트 패스!
        globalScene.ui.setMode(9); 
      }
      
    }, 1000);
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
