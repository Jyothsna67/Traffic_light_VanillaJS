function trafficLights() {
    const redLight = document.querySelector('.red');
    const yellowLight = document.querySelector('.yellow');
    const greenLight = document.querySelector('.green');

    function switchLights(){
        setTimeout(() => {
            redLight.style.opacity = 1;
            yellowLight.style.opacity = 0.2;
            greenLight.style.opacity = 0.2;

            setTimeout(() => {
                redLight.style.opacity = 0.2;
                yellowLight.style.opacity = 1;
                greenLight.style.opacity = 0.2;

              setTimeout(() => {
                  redLight.style.opacity = 0.2;
                  yellowLight.style.opacity = 0.2;
                  greenLight.style.opacity = 1;

                    setTimeout(() => {
                        switchLights();
                    }, 3000);
               }, 500);
            }, 4000);
        }, 0)
    }
    switchLights();
}

trafficLight();
