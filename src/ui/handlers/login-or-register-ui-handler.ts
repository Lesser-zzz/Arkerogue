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

    // ▼▼▼ 강제 오프라인 진입 버튼 추가 (globalScene으로 완벽 수정) ▼▼▼
    const offlineButton = globalScene.add.text(globalScene.scale.width / 2, globalScene.scale.height - 50, '[ Play Offline 강제 진입 ]', {
      fontSize: '18px',
      color: '#ffffff',
      backgroundColor: '#ff0000',
      padding: { x: 10, y: 5 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    // ▼▼▼ 강제 오프라인 진입 버튼 (위치 및 우선순위 완벽 수정) ▼▼▼
    const offlineButton = globalScene.add.text(160, 160, '[ Play Offline 강제 진입 ]', {
      fontSize: '12px',
      color: '#ffffff',
      backgroundColor: '#ff0000',
      padding: { x: 5, y: 5 }
    })
    .setOrigin(0.5)
    .setDepth(99999) // ⭐️ 모든 로그인 UI, 검은 화면을 뚫고 무조건 맨 위로 올라오게 만듭니다!
    .setScrollFactor(0) // 카메라가 움직여도 이 위치에 고정
    .setInteractive({ useHandCursor: true });

    offlineButton.on('pointerdown', () => {
      console.log("강제 오프라인 진입 시도");
      this.clear(); 
      if (globalScene.gameData) {
        globalScene.gameData.offline = true;
      }
      globalScene.ui.setMode(globalScene.ui.modes.MODIFIER_SELECT); 
    });
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
