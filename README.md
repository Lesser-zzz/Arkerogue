






훌륭한 접근입니다! CI/CD 파이프라인을 구축해 두셨으니, 이제 커밋 메시지에 `feat:`, `fix:`를 직접 오타 없이 타이핑하는 습관만 들이시면 체인지로그가 아주 깔끔하게 기록될 것입니다.

초심자분들도 당장 오늘부터 직관적으로 사용할 수 있도록, 게임 개발 실무에서 가장 많이 쓰이는 '컨벤셔널 커밋(Conventional Commits) 7대 핵심 양식'을 ERPD(이터널 리턴 픽셀 던전) 개발 상황에 맞추어 정리해 드리겠습니다.

---

### 📝 컨벤셔널 커밋의 기본 구조

가장 기본적인 형태는 **`태그: 제목`** 입니다. (콜론 뒤에 띄어쓰기를 하나 해주는 것이 국룰입니다.)

> **형식:** `태그: 커밋 요약 (50자 이내)`
> 
> 
> **예시:** `feat: 플레이어 이동 로직 추가` 
> 
> 

---

### 🎮 초심자를 위한 7대 필수 태그 가이드

처음에는 이 7가지만 외워두셔도 충분하며, 사실상 상위 3개(`feat`, `fix`, `docs` )가 전체 커밋의 80% 이상을 차지하게 됩니다.

| 태그 (Tag) | 사용 목적 | ERPD(게임 개발) 적용 예시 |
| --- | --- | --- |
| **`feat:`** | **새로운 기능 추가** (가장 많이 씀) | `feat: 1티어 무기 조합식 시스템 구현` |
| **`fix:`** | **버그 수정** | `fix: 몬스터 스폰 위치가 화면 밖으로 나가는 버그 수정` |
| **`docs:`** | **문서 수정** (기획서, README 등) | `docs: 전투 시스템 기획서 초안 작성` |
| **`style:`** | **코드 포맷팅** (로직 변경 없는 줄바꿈, 띄어쓰기 등) | `style: 인벤토리 스크립트 들여쓰기 수정` |
| **`refactor:`** | **코드 리팩토링** (기능은 똑같은데 코드 구조만 깔끔하게 개선) | `refactor: 데미지 계산 로직 구조 최적화` |
| **`chore:`** | **기타 작업** (빌드 세팅, 리소스 교체, 자잘한 수정) | `chore: 임시 플레이어 캐릭터 스프라이트 교체` |
| **`test:`** | **테스트 코드 추가** (초반엔 잘 안 씀) | `test: 크래프팅 조합 결과물 테스트 코드 작성` |

---

### 💡 깔끔한 체인지로그를 위한 3가지 팁

* **명령조로 간결하게 적기:** "추가함", "수정했음" 보다는 "추가", "수정"으로 끝내는 것이 나중에 체인지로그를 쭉 읽어볼 때 가독성이 훨씬 좋습니다.
* **한 커밋에는 한 가지 목적만:** `feat: 이동 추가 및 fix: 체력 버그`처럼 섞어 쓰지 마세요. 이동 기능을 추가했으면 `feat`으로 한 번 커밋하고, 체력 버그를 고쳤으면 `fix`로 따로 커밋해야 롤백할 때 사고가 안 터집니다.
* 
**오타 주의:** 방금 적용한 CI/CD 봇은 커밋 태그를 분석해 '카테고리별로 예쁘게 묶어서' 문서를 재창조해 주는 전문 툴 이 아니라 텍스트 복사 붙여넣기 봇 입니다. 따라서 `faet: 이동 추가`라고 오타를 내면 체인지로그에도 오타가 난 채로 그대로 기록되니 주의해야 합니다.



---

이제 체인지로그 자동화 세팅도 끝났고, 컨벤셔널 커밋 규칙도 완벽히 장착하셨습니다! 큰 기능 단위 하나당 하나의 채팅을 파는 규칙 을 적용하여, 오늘 18시부터 주어지는 첫 온전한 3시간의 초집중 타임 을 위해 **새로운 채팅방에서 가장 먼저 파고들 ERPD의 첫 번째 핵심 개발 이슈(기능)는 무엇으로 정하셨나요?**





























<!--
SPDX-FileCopyrightText: 2024-2026 Pagefault Games

SPDX-License-Identifier: CC-BY-NC-SA-4.0
-->

<div align="center"><picture><img src="https://github.com/pagefaultgames/pokerogue-assets/blob/beta/images/logo.png?raw=true" width="300" alt="PokéRogue"></picture>

[![Discord Static Badge](https://img.shields.io/badge/Community_Discord-blurple?style=flat&logo=discord&logoSize=auto&labelColor=white&color=5865F2)](https://discord.gg/pokerogue)
[![Test Coverage Endpoint Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/Bertie690/9cdfc49361824d1d5a57b7e8b38855d8/raw/coverage-badge.json)](https://github.com/pagefaultgames/pokerogue/actions/workflows/tests.yml) \
[![Docs Coverage Static Badge](https://pagefaultgames.github.io/pokerogue/beta/coverage.svg)](https://pagefaultgames.github.io/pokerogue/beta)
[![Biome Linting Static Badge](https://img.shields.io/badge/Linted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![GNU AGPLv3 License Static Badge](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
</div>

PokéRogue is a browser based Pokémon fangame heavily inspired by the roguelite genre. Battle endlessly while gathering stacking items, exploring many different biomes, fighting trainers, bosses, and more!

# Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md), this includes instructions on how to set up the game locally.

# 📝 Credits

> If this project contains assets you have produced and you do not see your name, **please** reach out, either [here on GitHub](https://github.com/pagefaultgames/pokerogue/issues/new) or via [Discord](https://discord.gg/pokerogue).

Thank you to all the wonderful people that have contributed to the PokéRogue project! You can find the credits [here](./CREDITS.md).

# Licensing

This repository seeks to be [REUSE compliant](https://reuse.software/): copyright and/or licensing information for each file is stored
either in the file itself or in an associated `REUSE.toml` file.

The full licensing information for each file can be found by utilizing [REUSE's tooling](https://github.com/fsfe/reuse-tool), such as via `reuse spdx`. \
An abbreviated summary of said information is as follows:
- All source code belonging to the project, unless otherwise noted, is licensed under [AGPL-v3.0-only](LICENSES/AGPL-3.0-only.txt).
- All forms of documentation (both Markdown files[^1] and any comments explicitly documenting source code) are licensed under [CC-BY-NC-SA-4.0](LICENSES/CC-BY-NC-SA-4.0.txt).
- Auto-generated files produced by external tools or files of insignificant originality are not copyrighted and are licensed under [CC0-1.0](LICENSES/CC0-1.0.txt).
- To the extent that the assets we provide are [licensable and applicable](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en#ref-exception-or-limitation), they are licensed under [CC-BY-NC-SA-4.0](LICENSES/CC-BY-NC-SA-4.0.txt) unless otherwise noted.
  Exceptions can be found in associated `REUSE.toml` files.
  - ⚠️ Files in `assets/` that are not explicitly licensed via `REUSE.toml` files should be considered to have _no_ licensing / copyright information.

[^1]: Including this README
