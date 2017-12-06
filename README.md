# alps-react

> A React implementation of [ALPS](http://alps.adventist.io)

## Install dependencies

```bash
yarn
```

## Usage

* Development:

  ```bash
  yarn start
  ```

## Differences with ALPS

* `molecules/images/LogoLink` was extracted from `organisms/global/header` as a
  separate component.
* `molecules/media/Figure` added.
* removed `role="navigation"` from `<nav>` elements: The element nav has an
  implicit role of navigation. Defining this explicitly is redundant and should
  be avoided (jsx-a11y/no-redundant-roles).
* `molecules/components/ShareTools` doesn't include AddThis code.
* `atoms/icons/Doc` and `atoms/icons/Pdf` now use the simplified
  `atoms/icons/File`.
* `atoms/media/Video` accepts `src`, `width` and `height` as props

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).
