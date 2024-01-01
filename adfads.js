// function trap(height) {
//     if (!height || height.length === 0) {
//         return 0;
//     }

//     let left = 0, right = height.length - 1;
//     let leftMax = height[left]; rightMax = height[right];
//     let waterTrapped = 0;


//     while (left < right) {
//         if (height[left] < height[right]) {
//             leftMax = Math.max(leftMax, height[left]);
//             waterTrapped += leftMax - height[left];
//             left++;
//     } else {
//         rightMax = Math.max(rightMax, height[right]);
//         waterTrapped += rightMax - height[right];
//         right--;
//     }
//     }

//     return waterTrapped;