document.addEventListener('DOMContentLoaded', () => {
    // menu
    const learn = document.querySelector('.learn'),
          build  = document.querySelector('.build'),
          explore  = document.querySelector('.explore'),
          wr      = document.querySelector('.window'),
          buildContent = document.querySelector('.build_content'),
          learnContent =  document.querySelector('.learn_content'),
          exploreContent = document.querySelector('.explore_content');
          road = document.querySelector('.road');

        build.addEventListener('mouseover', () => {
            wr.style.cssText = `
                transform: translate(-190px, -80px) scaleX(1.31579) scaleY(0.6975) rotateX(0deg);
                opacity: 1;
                z-index: 5;
            `;
            road.style.cssText = `
                transform:translateX(-735px) rotateX(0deg);
            `;
            buildContent.style.cssText = `
                opacity: 1;
                z-index: 5;
 
            `;
        });
        build.addEventListener('mouseout', () => {
            wr.style.cssText = `
                opacity: 0;
                z-index: 5;
            `;
            buildContent.style.cssText = `
                opacity: 0;
                z-index: 5;
            `;
            road.style.cssText = `
                transform:translateX(-50%) rotateX(0deg);
            `;
        });
        learn.addEventListener('mouseover', () => {
            wr.style.cssText = `
                transform: translate(-250px, -50px) scaleX(1.31579) scaleY(0.8525) rotateX(0deg); 
                opacity: 1;
                z-index: 5;
            `;
            road.style.cssText = `
                transform: translateX(-251px) rotateX(0deg);
            `;
            learnContent.style.cssText = `
                opacity: 1;
                z-index: 5;
            `;
        });
        learn.addEventListener('mouseout', () => {
            wr.style.cssText = `
                opacity: 0;
                z-index: 5;
            `;
            learnContent.style.cssText = `
                opacity: 0;
                z-index: 5;
            `;
            road.style.cssText = `
                transform:translateX(-50%) rotateX(0deg);
            `;
        });
        explore.addEventListener('mouseover', () => {
            wr.style.cssText = `
                transform: translate(-135px, -7px) scaleX(1.31579) scaleY(1.065) rotateX(0deg);
                opacity: 1;
                z-index: 5;
            `;
            road.style.cssText = `
                transform: translateX(-1248px) rotateX(0deg);
                opacity: 1;
                z-index: 5;
                
            `;
            exploreContent.style.cssText = `
                opacity: 1;
                z-index: 5;
            `;
        });
        explore.addEventListener('mouseout', () => {
            wr.style.cssText = `
                opacity: 0;
                z-index: 5;
            `;
            exploreContent.style.cssText = `
                opacity: 0;
            `;
            road.style.cssText = `
                transform:translateX(-50%) rotateX(0deg);
            `;
        });


        //   build.addEventListener('mouseover', () => {
        //     wr.style.cssText = `
        //         transform: translate(-200px, -80px) scaleX(1.31579) scaleY(0.6975) rotateX(0deg);
        //         opacity: 1;
        //     `;
        //     exploreContent.classList.remove('explore_content_active');
        //     learnContent.classList.remove('learn_content_active');
        //     buildContent.classList.add('build_content_active');
        //   });
        //   build.addEventListener('mouseout', () => {
        //         wr.style.cssText = `
        //         z-index: -100;
        //     `;
        //     buildContent.classList.remove('build_content_active');
        //   });
        //   buildContent.addEventListener('mouseover', () => {
        //     buildContent.classList.add('build_content_active');
        //     wr.style.cssText = `
        //         transform: translate(-200px, -80px) scaleX(1.31579) scaleY(0.6975) rotateX(0deg);
        //         opacity: 1;
        //     `;

        //   });
        //   learn.addEventListener('mouseover', () => {
        //     wr.style.cssText = `
        //         transform: translate(-260px, -50px) scaleX(1.31579) scaleY(0.8525) rotateX(0deg); 
        //         opacity: 1;
        //     `;

        //     exploreContent.classList.remove('explore_content_active');
        //     learnContent.classList.add('learn_content_active');
        //     buildContent.classList.remove('build_content_active');
        //   });
        //   explore.addEventListener('mouseover', () => {
        //     wr.style.cssText = `
        //         transform: translate(-135px, -7px) scaleX(1.31579) scaleY(1.065) rotateX(0deg);
        //         opacity: 1;
        //     `;
        //     exploreContent.classList.add('explore_content_active');
        //     learnContent.classList.remove('learn_content_active');
        //     buildContent.classList.remove('build_content_active');
        //   });

        //   wr.addEventListener('mouseover', () => {
        //     wr.style.cssText = `
        //         ${wr.getAttribute('style')};
        //     `;
        //   });

});