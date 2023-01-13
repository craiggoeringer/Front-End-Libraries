import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.onReset = this.onReset.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onStartStop = this.onStartStop.bind(this);

    this.formatTime = this.formatTime.bind(this);
    this.beep = this.beep.bind(this);
    this.tick = this.tick.bind(this);

    this.audio = null;
    this.timerId = null;

    this.state = {
      timerState: "Stopped",
      timerType: "Session",
      remainingTime: 1500,
      sessionLength: 25,
      breakLength: 5 };

  }

  tick() {
    const { timerState, timerType, remainingTime, sessionLength, breakLength } = this.state;
    if (timerState === "Running") {
      if (remainingTime === 0) {
        this.beep();

        const newTimerType = timerType === "Session" ? "Break" : "Session";
        const newRemainingTime = timerType === "Session" ? breakLength * 60 : sessionLength * 60;

        this.setState({
          timerType: newTimerType,
          remainingTime: newRemainingTime });


        return;
      }
      this.setState({ remainingTime: remainingTime - 1 });
    }
  }

  beep() {
    if (this.audio === null) {
      this.audio = document.getElementById('beep');
    }
    this.audio.play();
  }

  formatTime(time) {
    const minutes = parseInt(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return minutes + ":" + seconds;
  }

  onStartStop() {
    const timerState = this.state.timerState;
    if (timerState === "Running") {
      clearInterval(this.timerId);
      this.setState({ timerState: "Stopped" });
    } else {
      this.timerId = setInterval(this.tick, 1000);
      this.setState({ timerState: "Running" });
    }
  }

  onReset() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.setState({
      timerState: "Stopped",
      timerType: "Session",
      remainingTime: 1500,
      sessionLength: 25,
      breakLength: 5 });

  }

  onDecreaseBreak() {
    const { breakLength, timerState, timerType } = this.state;
    if (timerState === "Stopped" && breakLength > 1) {
      if (timerType === "Break") {
        this.setState({
          breakLength: breakLength - 1,
          remainingTime: (breakLength - 1) * 60 });

      } else {
        this.setState({
          breakLength: breakLength - 1 });

      }
    }
  }

  onIncreaseBreak() {
    const { breakLength, timerState, timerType } = this.state;
    if (timerState === "Stopped" && breakLength < 60) {
      if (timerType === "Break") {
        this.setState({
          breakLength: breakLength + 1,
          remainingTime: (breakLength + 1) * 60 });

      } else {
        this.setState({
          breakLength: breakLength + 1 });

      }
    }
  }

  onDecreaseSession() {
    const { sessionLength, timerState, timerType } = this.state;
    if (timerState === "Stopped" && sessionLength > 1) {
      if (timerType === "Session") {
        this.setState({
          sessionLength: sessionLength - 1,
          remainingTime: (sessionLength - 1) * 60 });

      } else {
        this.setState({
          sessionLength: sessionLength - 1 });

      }
    }
  }

  onIncreaseSession() {
    const { sessionLength, timerState, timerType } = this.state;
    if (timerState === "Stopped" && sessionLength < 60) {
      if (timerType === "Session") {
        this.setState({
          sessionLength: sessionLength + 1,
          remainingTime: (sessionLength + 1) * 60 });

      } else {
        this.setState({
          sessionLength: sessionLength + 1 });

      }
    }
  }

  render() {
    const { remainingTime, sessionLength, breakLength, timerType, timerState } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { id: "clock" }, /*#__PURE__*/
      React.createElement("div", { id: "indicator" }, /*#__PURE__*/
      React.createElement("div", { id: "timer-label" }, timerType), /*#__PURE__*/
      React.createElement("div", { id: "time-left" }, this.formatTime(remainingTime)), /*#__PURE__*/
      React.createElement("div", { id: "start_stop", className: "button", onClick: () => this.onStartStop() },
      timerState == "Stopped" ? "Start" : "Stop")), /*#__PURE__*/





      React.createElement("div", { id: "footer" }, /*#__PURE__*/
      React.createElement("div", { id: "break-settings", className: "settings" }, /*#__PURE__*/
      React.createElement("div", { className: "buttons-and-value" }, /*#__PURE__*/
      React.createElement("div", { id: "break-decrement", className: "button", onClick: () => this.onDecreaseBreak() }, "-"), /*#__PURE__*/
      React.createElement("div", { id: "break-length" }, breakLength), /*#__PURE__*/
      React.createElement("div", { id: "break-increment", className: "button", onClick: () => this.onIncreaseBreak() }, "+")), /*#__PURE__*/

      React.createElement("div", { id: "break-label", className: "setting-label" }, "Break Length")), /*#__PURE__*/


      React.createElement("div", { id: "reset", className: "button", onClick: () => this.onReset() }, "Reset"), /*#__PURE__*/

      React.createElement("div", { id: "session-settings", className: "settings" }, /*#__PURE__*/
      React.createElement("div", { className: "buttons-and-value" }, /*#__PURE__*/
      React.createElement("div", { id: "session-decrement", className: "button", onClick: () => this.onDecreaseSession() }, "-"), /*#__PURE__*/
      React.createElement("div", { id: "session-length" }, sessionLength), /*#__PURE__*/
      React.createElement("div", { id: "session-increment", className: "button", onClick: () => this.onIncreaseSession() }, "+")), /*#__PURE__*/

      React.createElement("div", { id: "session-label" }, "Session Length"))), /*#__PURE__*/



      React.createElement("audio", { id: "beep", preload: "auto", src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById('root'));