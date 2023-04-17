
# 포트폴리오 페이지

![Group 2099](https://user-images.githubusercontent.com/118143036/232407085-35d67394-c86e-48ae-893e-eba38a0cfcc4.png)

<br>

## 🌱 프로젝트소개
개발자로서의 첫번째 포트폴리오 사이트입니다. 첫번째 포트폴리오 사이트인만큼 화려한 효과보다는 심플함 속에서 내용에 집중될 수 있도록 디자인하여 제작햐였습니다.

<br>

## ☘️ 주요기능

#### 애니메이션 

- 백그라운드 요소로 원들이 계속해서 움직이게 구현
- framer motion으로 페이지 전환시 트랜지션 효과를 줌

#### pdf 다운로드 

- about페이지에서 pdf를 다운받으면 이력서를 확인할 수 있음

#### Context api
- json파일을 만들어 context파일로 import해 자료들을 바인딩함

<br>

## 🔨 기술스택

### **Tech**

<p>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
<img src="https://img.shields.io/badge/framer-0055FF?style=for-the-badge&logo=framer&logoColor=white">
<br>
</p>

### **Design**
<p>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/adobeillustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white"/>
<img src="https://img.shields.io/badge/adobephotoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white"/>
</p>

### **Tools**

<p>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<br>
</p>

<br>

<br/>

## 🔥 Trouble shooting
<details>
<summary><strong> issue1: 메인 페이지 mousemove </strong></summary>

메인 텍스트에 mousemove를 적용시킨 결과 텍스트가 중앙정렬이 안되는 현상이 발생. transform이 아닌 justify-content로 정렬시켰다.
</details>

<details>
<summary><strong> issue2: pdf 페이지 이슈 </strong></summary>

처음 pdf 요소를 만들때 페이지 이동이라고 생각해 페이지를 따로 만들었지만 배포문제가 생겨 페이지가 아닌 컴포넌트로 만들어 재배포하였더니 해결되었다.
</details>

<details>
<summary><strong> issue3: if return </strong></summary>

projectdetail 컴포넌트에서 context를 import해 바인딩을한 이후, 다른 페이지 이동을 할때 에러가 발생하였다.
if문으로 빈 html태그를 return 시켰더니 해결되었다.

</details>




<br></br>
## 🌸 와이어프레임

[💾 와이어프레임](https://www.figma.com/file/Niu7ncdyxGArjgJysyoXat/portfolio?node-id=0-1&t=RRhYXC8t3C8r0krf-0)

<br></br>
