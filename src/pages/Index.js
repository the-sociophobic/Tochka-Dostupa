import React from 'react'

import SpektCard from 'components/SpektCard';
import Ficher from 'components/Ficher';

import {
  easterEgg,
  easterEggRomanova,
  easterEggCramp,
  easterEggNata
} from 'utils/easterEggs.js';
import { recursiveTimeOut } from 'utils/utils.js';

//WTF export default () => { DORSN'T WORK ?!?!!
export default function() {
  document.title = this.state.lang ? "The Access Point: Main Page" : "Точка Доступа: Главная страница";

  var W = this.state.width;
  var H = this.state.height;
  var textStyle = {
    fontSize: (H / W > 0.7 ? W / 11 : (Math.pow(W * H, 0.452) * (W / H > 20 / 9 ? 0.21 : 0.22))) * (this.state.lang ? 1.1 : 1) + "px"
  };
  var textStyleMobile = {
    fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.12 : 0.14) : (W < 340 || H < 340 ? 0.138 : 0.153)))) * (this.state.lang ? 1.1 : 1) + "px"
  };
  var landscape = W > H && W <= 768;

  if (this.state.code === "рейв")
    recursiveTimeOut(easterEgg.bind(this), 555, 100500);
  if (this.state.code === "ййййй")
    recursiveTimeOut(easterEggRomanova.bind(this), 555, 100500);
  if (this.state.code === "самп")
    recursiveTimeOut(easterEggCramp.bind(this), 555, 100500);
  if (this.state.code === "ната")
    recursiveTimeOut(easterEggNata.bind(this), 555, 100500);


  var titleText = [["четвертый международный летний фестиваль искусств", "точка доступа", "19\xa0июля — 5\xa0августа"], ["4th international summer festival of arts", "the access point", "19\xa0July — 5\xa0August"]];
  var codeText = this.lang(titleText)
    .map(paragraph =>
      <h1 style={this.state.mobile ? textStyleMobile : textStyle} key={paragraph}>
        {
          paragraph.split("").map((letter, index) =>
            <b onClick={() => this.setState({code: this.state.code + letter})} key={letter + index}>
              {letter}
            </b>
          )
        }
      </h1>
    );

  return (
    <div>
      <div className="upper with-logo">
        <div className={"text-container" + (landscape ? " landscape" : "")}>
          <section id="title-container">
            {codeText}
          </section>
        </div>
      </div>
      <div className="cards-container">
        <div className="row">
          <SpektCard spekt={this.state.spekts[1]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <SpektCard spekt={this.state.spekts[5]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[4]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <Ficher ficher={this.state.fichers[(this.state.abonementPic) % 2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} />

          <SpektCard spekt={this.state.spekts[0]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          {/* <Abonement pic={this.state.abonementPic} lang={this.lang.bind(this)} align="right" /> */}
          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[0]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[1]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[2]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[3]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[4]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <Ficher ficher={this.state.fichers[(this.state.abonementPic + 1) % 2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} />

          <SpektCard spekt={this.state.spekts[3]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
        </div>
      </div>
    </div>
  );
}