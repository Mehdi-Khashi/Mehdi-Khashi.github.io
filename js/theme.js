document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // do this
            document.documentElement.style.setProperty('--color-black', '#fff');
            document.documentElement.style.setProperty('--color-black-dark', '#fff');
            document.documentElement.style.setProperty('--color-black-light', '#f2f3f7');
            document.documentElement.style.setProperty('--color-black-light-sec', '#2c98f0');
            document.documentElement.style.setProperty('--color-white', '#000');
            document.documentElement.style.setProperty('--color-red-dark', '#2c98f0');
            document.documentElement.style.setProperty('--color-red-light', '#44a4f2');
            document.documentElement.style.setProperty('--color-body-text', 'rgb(0,0,0,0.5)');
            document.documentElement.style.setProperty('--color-body-text-reverse', 'rgb(255,255,255,0.7)');


            document.getElementById("picOne").style.backgroundImage = "url('images/img01.jpeg')";
            document.getElementById("picTwo").style.backgroundImage = "url('images/img02.jpg')";

            console.log('Checked');
        } else {
            // do that
            document.documentElement.style.setProperty('--color-black', '#000');
            document.documentElement.style.setProperty('--color-black-dark', '#191919');
            document.documentElement.style.setProperty('--color-black-light', '#323232');
            document.documentElement.style.setProperty('--color-black-light-sec', '#323232');
            document.documentElement.style.setProperty('--color-white', '#fff');
            document.documentElement.style.setProperty('--color-red-dark', '#b20000');
            document.documentElement.style.setProperty('--color-red-light', '#cc0000');
            document.documentElement.style.setProperty('--color-body-text', 'rgb(255,255,255,0.5)');
            document.documentElement.style.setProperty('--color-body-text-reverse', 'rgb(0,0,0,0.5)');

            document.getElementById("picOne").style.backgroundImage = "url('images/img04.png')";
            document.getElementById("picTwo").style.backgroundImage = "url('images/img03.png')";

            console.log('Not checked');
        }
    });
});