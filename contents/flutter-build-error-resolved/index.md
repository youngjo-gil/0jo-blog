---
title: 'Flutter에서 만난 에러'
date: '2024-02-27'
category: ["Flutter"]
summary: 'Flutter에서 만난 에러와 해결 방법에 대한 기록'
slug: 'flutter-build-error-resolved'
---


Flutter를 개발하면서 만나는 다양한 에러 상황에 대한 기록이다. 내가 네이티브에 대한 지식이 부족함이 해결 방식에 대한 시행 착오를 줄이기 위함이다.


### Try replacing 'com.example' with your signing id in Xcode: open ios/Runner.xcworkspace Error launching application on iPhone.

flutter를 ios 기기에서 빌드하려고 하는 상황에서 마주한 에러 상황이다.

위 상황은 해당 앱의 Signing 오류로 해당 project의 Bundle Identifier를 연결된 개발자 개정과 일치시켜 빌드하면 해결된다.

Xcode > Runner > Signing & Capabilities 의 Bundle Identifier를 체그하고 Provisioning Profile을 확인하자.

![flutter-error-case1](./flutter-error-case1.png)

---
