// ----=  Faces  =----

let leftBunnyEar;
let rightBunnyEar;
let Bunnynose;
let BunnyBody;

/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
  leftBunnyEar = loadImage('/images/Left_Bunny_Ear.png');
  rightBunnyEar = loadImage('/images/Right_Bunny_Ear.png');
  Bunnynose = loadImage('/images/Bunny_Nose.png');
  BunnyBody = loadImage('/images/Bunny_Body.png');
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;
    
    let BunnyfaceX = faceCenterX;
    let BunnyfaceY = faceCenterY - 10;
    let BunnyfaceWidth = faceWidth * 1.35;
    let BunnyfaceHeight = faceheight * 1.2;

    //let BunnyfaceYOffset = 25;

    // nose
    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;

    // bunny nose
    let BunnynoseX = noseTipX;
    let BunnynoseY = noseTipY;
    let BunnynoseWidth = BunnyfaceWidth * 2.5; // helps with sizing when closer and further away
    let BunnynoseHeight = BunnyfaceHeight * 2.2;

    // offset for placement of bunny nose
    let noseXOffset = BunnyfaceWidth * 1.33;
    let noseYOffset = BunnyfaceHeight * 1.25;

    let leftBunnyEyeWidth = faceWidth / 3;
    let rightBunnyEyeWidth = faceWidth / 3;
    let leftBunnyEyeHeight = leftEyeHeight * 4;
    let rightBunnyEyeHeight = rightEyeHeight * 4;

    let leftBunnyIrisWidth = leftEyeWidth * 1.1;
    let leftBunnyIrisHeight = leftEyeHeight * 2.5;
    let rightBunnyIrisWidth = rightEyeWidth * 1.1;
    let rightBunnyIrisHeight = rightEyeHeight * 2.5;

    let BunnyEarWidth = BunnyfaceWidth * 1.4;
    let BunnyEarHeight = BunnyfaceHeight * 1.3;

    let leftEarX = face.keypoints[67].x;
    let leftEarY = face.keypoints[67].y;

    let rightEarX = face.keypoints[297].x;
    let rightEarY = face.keypoints[297].y;

    let leftEarXOffset = faceWidth * 0.65;
    let leftEarYOffset = faceheight * 1.1;

    let rightEarXOffset = faceWidth * 1.15;
    let rightEarYOffset = faceheight * 1.1;
    
    let SnoutX = face.keypoints[164].x;
    let SnoutY = face.keypoints[164].y;

    let ChinX = face.keypoints[152].x;
    let ChinY = face.keypoints[152].y;

    /*
    Start drawing on the face here
    */
    noStroke();
    // fill(get(leftEyeCenterX, leftEyeCenterY))

    image(leftBunnyEar, leftEarX - leftEarXOffset, leftEarY - leftEarYOffset, BunnyEarWidth, BunnyEarHeight);
    image(rightBunnyEar, rightEarX - rightEarXOffset, rightEarY - rightEarYOffset, BunnyEarWidth, BunnyEarHeight);

    fill(255);
    ellipse(BunnyfaceX,BunnyfaceY,BunnyfaceWidth,BunnyfaceHeight); // head of bunny


    fill(0);
    ellipse(leftEyeCenterX, leftEyeCenterY, leftBunnyEyeWidth * 1.15, leftBunnyEyeHeight * 1.15); //  black outline for  eyes for whatever noStroke was applying to everything?
    ellipse(rightEyeCenterX, rightEyeCenterY, rightBunnyEyeWidth * 1.15, rightBunnyEyeHeight * 1.15);

    fill(255);
    ellipse(leftEyeCenterX, leftEyeCenterY, leftBunnyEyeWidth, leftBunnyEyeHeight); // white part on eyes
    ellipse(rightEyeCenterX, rightEyeCenterY, rightBunnyEyeWidth, rightBunnyEyeHeight);
    
    fill(0);
    ellipse(leftEyeCenterX, leftEyeCenterY, leftBunnyIrisWidth, leftBunnyIrisHeight); // iris of eyes
    ellipse(rightEyeCenterX, rightEyeCenterY, rightBunnyIrisWidth, rightBunnyIrisHeight);
    
    //drawPoints(face.leftEye);
    //drawPoints(face.leftEyebrow);
    //drawPoints(face.lips);
    //drawPoints(face.rightEye);
    //drawPoints(face.rightEyebrow);

    fill(0);
    ellipse(lipsCenterX, lipsCenterY / 0.99, lipsWidth, lipsHeight);

    fill(255);
    ellipse(SnoutX, SnoutY, faceWidth / 1.8, faceheight / 2.8);

    image(Bunnynose,BunnynoseX - noseXOffset,BunnynoseY - noseYOffset,BunnynoseWidth,BunnynoseHeight); // image load for bunny nose

    image(BunnyBody, ChinX, ChinY, faceWidth, faceheight);

    //fill(66, 46, 15);
    //ellipse(leftEyebrowCenterX,leftEyebrowCenterY,leftEyebrowWidth,leftEyebrowHeight);
    //ellipse(rightEyebrowCenterX,rightEyebrowCenterY,rightEyebrowWidth,rightEyebrowHeight);


    // drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}