document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.demo-navigation-menu li');
    const demoImage = document.querySelector('.demo-img-wrapper img');

    const imageMap = {
        button1: './image/demo_홈.svg',
        button2: './image/demo_신고하기.svg',
        button3: './image/demo_내정보.svg',
        button4: './image/demo_이용방법.svg',
        button5: './image/demo_신고내역.svg',
        button6: './image/demo_철도경찰대찾기.svg',
    };

    const altTextMap = {
        button1: '홈 화면',
        button2: '신고하기',
        button3: '내 정보',
        button4: '이용 방법',
        button5: '신고 내역',
        button6: '철도 경찰대 찾기',
    };

    demoImage.setAttribute('src', imageMap.button1); // 홈 화면 이미지
    demoImage.setAttribute('alt', altTextMap.button1); // 홈 화면 alt 텍스트
    demoImage.classList.add('show'); // 처음에는 바로 보이도록 애니메이션 적용

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(li => li.classList.remove('selected'));
            item.classList.add('selected');

            const buttonClass = item.classList[0]; // 예: 'button1', 'button2' 등
            if (imageMap[buttonClass]) {
                demoImage.setAttribute('src', imageMap[buttonClass]); // 이미지 변경
                demoImage.setAttribute('alt', altTextMap[buttonClass]); // alt 텍스트 변경
                
                // 애니메이션
                demoImage.classList.remove('show'); // 이전 애니메이션 제거
                void demoImage.offsetWidth; // 리플로우 발생시켜 애니메이션 초기화
                demoImage.classList.add('show'); // 애니메이션 시작
            }
        });
    });
});