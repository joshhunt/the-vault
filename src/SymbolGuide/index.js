import React from 'react';

import './styles.css';

import birdBranch from '../symbols/bird-branch.png';
import birdDown from '../symbols/bird-down.png';
import birdFly from '../symbols/bird-fly.png';
import fireLeft from '../symbols/fire-left.png';
import fireRight from '../symbols/fire-right.png';
import fishCurl from '../symbols/fish-curl.png';
import fishLeft from '../symbols/fish-left.png';
import fishUp from '../symbols/fish-up.png';
import infinity from '../symbols/infinity.png';
import snakeEight from '../symbols/snake-eight.png';
import snakeSplit from '../symbols/snake-split.png';
import snakeU from '../symbols/snake-u.png';
import spearLeft from '../symbols/spear-left.png';
import spearRight from '../symbols/spear-right.png';
import twoFish from '../symbols/two-fish.png';

const SYMBOLS = [
  { icon: birdBranch, label: 'Bird branch' },
  { icon: birdDown, label: 'Bird down' },
  { icon: birdFly, label: 'Bird fly' },
  { icon: fireLeft, label: 'Fire left' },
  { icon: fireRight, label: 'Fire right' },
  { icon: fishCurl, label: 'Fish curl' },
  { icon: fishLeft, label: 'Fish left' },
  { icon: fishUp, label: 'Fish up' },
  { icon: infinity, label: 'Infinity' },
  { icon: snakeEight, label: 'Snake eight' },
  { icon: snakeSplit, label: 'Snake split' },
  { icon: snakeU, label: 'Snake U' },
  { icon: spearLeft, label: 'Spear left' },
  { icon: spearRight, label: 'Spear right' },
  { icon: twoFish, label: 'Two fish' }
];

export default function SymbolGuide() {
  return (
    <div className="symbols">
      {SYMBOLS.map(symbol => (
        <div className="symbol">
          <img src={symbol.icon} className="symbol-icon" />
          <div className="symbol-label">{symbol.label}</div>
        </div>
      ))}
    </div>
  );
}
