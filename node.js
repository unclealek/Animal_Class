const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

const modelPath = ' C:\Users\Kelvi\CondaProjects\Classifier\imageClass\models\dogcatmodel.h5'; // Replace with your actual path
const destinationPath = ' C:\Users\Kelvi\CondaProjects\Classifier\imageClass\models'; // Replace with your actual path

async function convertModel() {
    // Load the Keras model
    const model = await tf.loadLayersModel(`file://${modelPath}`);

    // Convert the model to TensorFlow.js format
    const tfjsModel = await tf.node.saveModel(destinationPath, model);

    console.log('Model converted successfully.');
}

convertModel();
