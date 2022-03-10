<h1 align="center">Mouseee</h1>

<p align="center">
  <img alt="NPM" src="https://img.shields.io/npm/l/mouseee?style=flat-square">
  <img alt="jsDelivr hits (npm)" src="https://img.shields.io/jsdelivr/npm/hy/mouseee?style=flat-square">
  <img alt="npm" src="https://img.shields.io/npm/v/mouseee?style=flat-square">
</p>

<p align="center">
  Mouseee replaces the browser's default cursor with a custom cursor.
</p>

---------------------

## Get Started

First of all, we need to hide the browser's default cursor. Doing this is simple, just include the following code snippet in your global CSS:

```CSS
* {
  cursor: none;
}
```

Now import the Mouseee code via CDN and replace {version} with the desired version.

```html
<script src="https://cdn.jsdelivr.net/npm/mouseee@{version}/lib/index.js" type="module"></script>
```

> See all versions of the Mouse by [clicking here](https://www.npmjs.com/package/mouseee).

## Setting

You can customize the cursor via mouseeeConfig object:

```javascript
const mouseeeConfig = {
  color: "#fff",  // cursor border color
  size: 20,  // cursor size
  trailColor: "#fff",  // trail color
  trailTime: 300  // trail duration time
}
```

## Licence

Mouseee is [MIT licensed](https://github.com/pedro-isacss/mouseee/blob/master/LICENSE).

## Author
Hi, my name is Pedro Isac.

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://mail.google.com/mail/u/0/?to=ss.pedroisac@gmail.com&tf=cm)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://bit.ly/ss_pedroisac)
