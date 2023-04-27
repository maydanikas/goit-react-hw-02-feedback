// FIRST EDITION OF HOMEWORK
// import css from './Widget.module.css';
// import React from 'react';
// import { Component } from 'react';

// export class Widget extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };
//   handleNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };
//   handleBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }
//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = this.state;
//     return Math.floor((good / (good + neutral + bad)) * 100);
//   }

//   render() {
//     return (
//       <div className={css.feedbackContainer}>
//         <h2>Please leave feedback below:</h2>
//         <ul className={css.feedbackList}>
//           <li className={css.feedbackItem}>
//             <button
//               type="button"
//               className={css.emojiBtn}
//               onClick={this.handleGood}
//             >
//               &#128525;
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className={css.emojiBtn}
//               onClick={this.handleNeutral}
//             >
//               &#128528;
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className={css.emojiBtn}
//               onClick={this.handleBad}
//             >
//               &#128545;
//             </button>
//           </li>
//         </ul>
//         <h2>Statistics</h2>
//         <ul className={css.statList}>
//           <li>
//             <b> Good:</b> <span>{this.state.good}</span>
//           </li>
//           <li>
//             <b> Neutral:</b> <span>{this.state.neutral}</span>
//           </li>
//           <li>
//             <b> Bad:</b> <span>{this.state.bad}</span>
//           </li>
//         </ul>

//         <ul className={css.totalStats}>
//           <li>
//             <b>Total: </b>
//             <span>{this.countTotalFeedback()}</span>
//           </li>
//           <li>
//             <b>Positive feedback: </b>
//             <span>{this.countPositiveFeedbackPercentage() + '%'}</span>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
