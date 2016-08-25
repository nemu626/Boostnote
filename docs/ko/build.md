# Build

빌드하기 위해선 Node LTS v4.\*.\* 가 필요합니다.

## 개발

Webpack HRM을 개발을 위해 사용합니다.
다음 명령을 통해 저희가 해둔 설정을 사용 할 수 있습니다.

```
npm run webpack
```

몇 초 후, 다음 메세지를 보게 될겁니다.

```
webpack: bundle is now VALID.
```

그럼 앱을 실행합시다.

```
npm run hot
```

> 원래 앱은 `npm start`로 실행가능합니다. 하지만 이 경우, 컴파일된 스크립트를 사용할 것입니다.

이로써 웹팩이 자동적으로 코드변경을 확인하고 적용해줄 것입니다.

> ### 주의
> 가끔 직접 리프레쉬를 해주어야 하는 경우가 있습니다.
> 1. 콤포넌트의 컨스트럭터 함수를 수정할 경우샐
> 2. 새로운 CSS코드를 추가할 경우(1.과 같은 이유: CSS클래스는 콤포넌트마다 다시 만들어 지는데, 이 작업은 컨스트럭터에서 일어납니다.)

## 배포

그런트를 사용합니다.
실제 디플로이는 `grunt`로 실행할 수 있습니다. 하지만, 여기엔 Codesign과 Authenticode의 과정이 포함되어있기 때문에 사용 하셔선 안됩니다.

그래서, 실행파일만을 만드는 스크립트를 준비해 뒀습니다.

```
grunt pre-build
```

실행 파일은 `dist`에서 찾을 수 있습니다. 이 경우, 인증이 되어있지 않기 때문에 업데이터는 사용할 수 없습니다.

필요로 하다면, 이 실행파일에 Codesign나 Authenticode등의 서명을 할 수 있습니다.