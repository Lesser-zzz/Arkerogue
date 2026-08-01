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

    // ▼▼▼ 엔진 내부 취소(B버튼) 시그널 강제 전송 ▼▼▼
    setTimeout(() => {
      console.log("1초 경과: 강제 B버튼(오프라인 진입) 시그널 전송!");
      try {
        // 포켓로그 엔진 내부에서 1번은 'Button.CANCEL(취소/뒤로가기)'을 의미합니다.
        // 키보드가 먹통이어도, 엔진 심장부에 직접 취소 버튼을 눌렀다고 명령을 내립니다!
        this.processInput(1); 
      } catch (e) {
        console.error("시그널 전송 실패:", e);
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
