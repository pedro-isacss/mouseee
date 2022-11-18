<h1 align="center">Mouseee</h1>

<p align="center">
  <img alt="NPM" src="https://img.shields.io/npm/l/mouseee?color=00B4DB&style=flat-square">
  <img alt="jsDelivr hits (npm)" src="https://img.shields.io/jsdelivr/npm/hy/mouseee?color=00B4DB&style=flat-square">
  <img alt="npm" src="https://img.shields.io/npm/v/mouseee?color=00B4DB&style=flat-square">
</p>

<p align="center">
  A simple custom cursor that leaves a temporary trail wherever it goes.
</p>

---------------------

## Get Started

Import the Mouseee code via CDN and replace {version} with the desired version.

```html
<script src="https://cdn.jsdelivr.net/npm/mouseee@{version}/lib/index.js" type="module"></script>
```

> See all versions of the Mouse by [clicking here](https://www.npmjs.com/package/mouseee).

## Customizing

1 - Hide the default cursor (Optional):

```CSS
* {
  cursor: none;
}
```

2 - Customize the cursor (Optional):

```javascript
const mouseeeConfig = {
  color: "#fff",  // cursor border color
  size: 20,  // cursor size
  trailColor: "#fff",  // trail color
  trailTime: 300,  // trail duration time
  showTrail: true // show trail
}
```

## Licence

Mouseee is [MIT licensed](https://github.com/pedro-isacss/mouseee/blob/master/LICENSE).

## More details
- NPM: https://www.pedroisac.dev/mouseee/
- jsDelivr: https://www.jsdelivr.com/package/npm/mouseee
