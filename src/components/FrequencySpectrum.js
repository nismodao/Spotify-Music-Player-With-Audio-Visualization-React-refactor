import React from 'react';

class FrequencySpectrum extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shouldDraw: false,
      analyser: undefined,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    if (props.shouldDraw) {
      return {
        shouldDraw: props.shouldDraw,
        analyser: props.analyser,
      };
    } else {
      return state;
    }
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.shouldDraw === false && this.props.shouldDraw === true) {
      this.draw(this.props.analyser);
    }
  }

  draw() {
    const { ctx, canvas } = this;
    const { analyser } = this.props;
    requestAnimationFrame(this.draw.bind(this));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const freqByteData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freqByteData);
    const barWidth = (canvas.width / freqByteData.length) * 5;
    let barHeight;
    let x = 0;
    for (let i = 0; i < freqByteData.length; i++) {
      barHeight = ((freqByteData[i] + freqByteData[i + 1] + freqByteData[i + 2] + freqByteData[i + 3] +
        freqByteData[i + 4] / 2.5));
      ctx.strokeRect(x, canvas.height - barHeight / 2, barWidth, canvas.height);
      x += barWidth;
    }
  }

  render() {
    return (
      <div>
        <canvas className="outline ma4" ref="canvas" width={1024} height={200} />
      </div>
    );
  }
}
export default FrequencySpectrum;
