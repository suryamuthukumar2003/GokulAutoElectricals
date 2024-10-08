// // import React, { Component } from 'react'

// // export default class Review extends Component {
// //     componentDidMount(){
// //         (function(d, s, id) { 
// //             var js; 
// //             if (d.getElementById(id)) 
// //                 {
// //                     return;
// //                 } 
// //                 js = d.createElement(s); 
                
// //                 js.id = id; js.src = "https://embedsocial.com/cdn/ht.js";
// //                 d.getElementsByTagName("head")[0].appendChild(js);
// //              }
// //              (document, "script", "EmbedSocialHashtagScript"));   
// //     }
// //   render() {
// //     return (
// //       <div className='container'>
// //         <div className="embedsocial-hashtag" data-ref="53e7882ee882acfc78fb6fa8d9b9764b7dabf70b"></div>
// //       </div>
// //     )
// //   }
// // }


// import React, { Component } from 'react';

// export default class Review extends Component {
//   componentDidMount() {
//     (function(d, s, id) { 
//       var js; 
//       if (d.getElementById(id)) {
//         return;
//       } 
//       js = d.createElement(s); 
//       js.id = id; 
//       js.src = "https://embedsocial.com/cdn/ht.js";
//       d.getElementsByTagName("head")[0].appendChild(js);
//     }(document, "script", "EmbedSocialHashtagScript"));

//     // Add a delay to ensure the external script is loaded
//     setTimeout(() => {
//       // Target the element(s) that have all three classes and hide them
//       const element = document.querySelector('.feed-powered-by-es.feed-powered-by-es-center.feed-powered-by-es-feed-img');
//       if (element) {
//         element.style.visibility="hidden";
//       }

//       // Also hide the branding container
//       const brandingElement = document.querySelector('.es-branding-container');
//       if (brandingElement) {
//         brandingElement.style.setProperty('visibility', 'hidden', 'important');
//       }
//     }, 1000); // Adjust the delay as needed to allow the script to load
//   }

//   render() {
//     return (
//       <div className='container'>
//         <div className="embedsocial-hashtag" data-ref="53e7882ee882acfc78fb6fa8d9b9764b7dabf70b"></div>
//       </div>
//     );
//   }
// }

// import React, { useEffect } from 'react'

// function Review() {
//     useEffect(() => {
//         // Dynamically load the sociablekit widget script
//         const script = document.createElement("script");
//         script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
//         script.async = true;
//         script.defer = true;
//         document.body.appendChild(script);
    
//         // Cleanup the script when the component unmounts
//         return () => {
//           document.body.removeChild(script);
//         };
//       }, []);
    
//       return (
//         <div className='container'>
//           <div className="sk-ww-google-reviews" data-embed-id="25472459"></div>
//         </div>
//       );
//     };

// export default Review

import React, { useEffect } from 'react';

function Review() {

  return (
    <div className='container'>
      <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25472574' width='100%' height='370'></iframe>
    </div>
  );
}

export default Review;
