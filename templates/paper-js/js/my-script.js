let leftToRight = new Path();
leftToRight.strokeColor = "yellow";
leftToRight.strokeWidth = 5;
leftToRight.add(0,view.bounds.height/2);
leftToRight.add(view.bounds.width,view.bounds.height/2);

let topToBottom = new Path();
topToBottom.strokeColor = "red";
topToBottom.strokeWidth = 4;
topToBottom.add(view.bounds.width/2,0);
topToBottom.add(view.bounds.width/2,view.bounds.height);

let topLeftToBottomRight = new Path();
topLeftToBottomRight.strokeColor = "green";
topLeftToBottomRight.strokeWidth = 3;
topLeftToBottomRight.add(0,0);
topLeftToBottomRight.add(view.bounds.width,view.bounds.height);

let topRightToBottomLeft = new Path();
topRightToBottomLeft.strokeColor = "blue";
topRightToBottomLeft.strokeWidth = 2;
topRightToBottomLeft.add(view.bounds.width,0);
topRightToBottomLeft.add(0,view.bounds.height);
