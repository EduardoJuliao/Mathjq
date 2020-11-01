import { Component, OnInit } from '@angular/core';
declare var MathQuill: any;
declare var MathJax: any;

@Component({
  selector: 'app-math-display',
  templateUrl: './math-display.component.html',
  styleUrls: ['./math-display.component.scss']
})
export class MathDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var mathFieldSpan = document.getElementById('math-field');
    var latexSpan = document.getElementById('latex');
    var mmlSpan = document.getElementById('mml');
    var rawSpan = document.getElementById('raw');

    var MQ = MathQuill.getInterface(2);
    var mathField = MQ.MathField(mathFieldSpan, {
      spaceBehavesLikeTab: true,
      handlers: {
        edit: function () {
          rawSpan.textContent = mathField.text();
          latexSpan.textContent = mathField.latex();
          mmlSpan.textContent = MathJax.tex2mml(mathField.latex());
        }
      }
    });
  }
}
