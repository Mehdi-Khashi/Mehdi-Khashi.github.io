const modelViewer = document.getElementById('modelViewer');
let index = 0;
const orbitCycle = [
    '45deg 55deg 4m',
    '140deg 70deg 0%',
    '0deg 50deg 50%'
    // modelViewer.cameraOrbit
];

const camera = [
    '-10.5m -12.3m 2m',
    '-11.1m -11.4m 5m',
    '-9.5m -12.9m 2.2m'
    // modelViewer.cameraOrbit
];

const backgroundColors = ['radial-gradient(#ffffff, #cafafe)','radial-gradient(#ffffff, #adadad)','radial-gradient(#ffffff, #edf5e1)'];

function btClicked() {

    if (index > 2) {
        index = 0;
    }

    document.body.style.backgroundImage = backgroundColors[index];

    modelViewer.cameraOrbit =
        orbitCycle[index];
    modelViewer.cameraTarget =
    camera[index];
    index++;

}

modelViewer.addEventListener('model-visibility', function(evt) {
    // console.log("here")
    // console.log(evt);
    document.getElementById('loadingPage').style.cssText = 'display: none;';
})