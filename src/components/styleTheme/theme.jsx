const media = {
  xs: '320px',
  s: '375px',
  m: '768px',
  l: '1280px',
};

export const lightColors = {
  colors: {
    white: '#ffffff',
    textPrimary: 'rgb(105, 105, 105)',
    hoverShadow: 'rgba(0, 0, 0, 0.65)',
    border: 'transparent',
    contactHover: 'rgba(245, 245, 245, 1)',
    black: '#000000',
    hoverBtns: 'rgb(99,230,120)',
    hoverBtnContactList: '#00000051',
    formLoginactive: '#1976d2',
    activeBorder: '#1976d2',
    loginInputBg: '#ffffff',
    borderLoginForm: 'rgba(0, 0, 0, 0.23)',
    formLabelText: '#1976d2',
    focusedBorderInput: '#1976d2',
    checkboxActive: 'rgb(49, 189, 126)',
    paperShadow: 'rgba(89, 83, 83, 0.35)',
    radioActive: 'rgb(49, 189, 126)',
    contactsListBorder: 'rgba(0, 0, 0, 0.2)',
    btnsHoverColor: 'rgba(0, 0, 0, 0.75)',
  },
};

export const darkColors = {
  colors: {
    bodyBg: 'rgb(32, 44, 56)',
    textPrimary: '#ffffff',
    black: '#000000',
    hoverShadow: 'rgba(99,230,120,0.75)',
    transparent: 'transparent',
    border: 'rgb(99,230,120)',
    contactHover: 'rgba(125, 240, 132, 0.25)',
    white: '#ffffff',
    formBorder: '#1976d2',
    hoverBtns: 'rgb(99,230,120)',
    activeBorder: 'green',
    loginInputBg: '#212121',
    borderLoginForm: '#ffffff',
    focusedBorderInput: 'rgb(99,230,120)',
    checkboxActive: 'rgb(49, 189, 126)',
    paperShadow: 'rgba(255, 255, 255, 0.25)',
    radioActive: 'rgb(49, 189, 126)',
    contactsListBorder: 'rgba(222, 223, 224, 0.2)',
    btnsHoverColor: 'rgba(255, 255, 255, 0.55)',
  },
};

export const lightTheme = {
  colors: {
    mainLayout: {
      bg: lightColors.colors.white,
    },
    header: {
      text: lightColors.colors.textPrimary,
      bg: lightColors.colors.white,
      btnBg: lightColors.colors.white,
      boxShadowHover: lightColors.colors.hoverShadow,
      border: lightColors.colors.border,
    },
    contactsList: {
      bg: lightColors.colors.white,
      hover: lightColors.colors.contactHover,
      hoveredBtnColor: lightColors.colors.hoverBtnContactList,
      border: lightColors.colors.contactsListBorder,
    },
    editContact: {
      text: lightColors.colors.black,
      icons: lightColors.colors.textPrimary,
      formBorder: lightColors.colors.black,
      hoverBorder: lightColors.colors.formBorder,
    },
    addContact: {
      text: lightColors.colors.textPrimary,
      icon: lightColors.colors.textPrimary,
      hover: lightColors.colors.hoverBtns,
    },
    loginForm: {
      text: lightColors.colors.black,
      textPrimery: lightColors.colors.textPrimary,
      bg: lightColors.colors.white,
      btnActive: lightColors.colors.formLoginactive,
      borderActive: lightColors.colors.activeBorder,
      inputBg: lightColors.colors.loginInputBg,
      border: lightColors.colors.borderLoginForm,
      label: lightColors.colors.formLabelText,
      focusedInput: lightColors.colors.focusedBorderInput,
      iconBtn: lightColors.colors.textPrimary,
      checkboxBorder: lightColors.colors.textPrimary,
      checkboxChecked: lightColors.colors.checkboxActive,
      paperShadow: lightColors.colors.paperShadow,
      radioBorder: lightColors.colors.textPrimary,
      radioChecked: lightColors.colors.radioActive,
    },
    btns: {
      shadow: lightColors.colors.btnsHoverColor,
    },
  },
  media,
};

export const darkTheme = {
  colors: {
    mainLayout: {
      bg: darkColors.colors.bodyBg,
    },
    header: {
      text: darkColors.colors.white,
      bg: darkColors.colors.bodyBg,
      btnBg: darkColors.colors.transparent,
      boxShadowHover: darkColors.colors.hoverShadow,
      border: darkColors.colors.border,
    },
    contactsList: {
      bg: darkColors.colors.bodyBg,
      hover: darkColors.colors.contactHover,
      hoveredBtnColor: lightColors.colors.white,
      border: darkColors.colors.contactsListBorder,
    },
    editContact: {
      text: darkColors.colors.white,
      icons: darkColors.colors.white,
      formBorder: darkColors.colors.formBorder,
      hoverBorder: darkColors.colors.border,
    },
    addContact: {
      text: darkColors.colors.white,
      icon: darkColors.colors.white,
      hover: darkColors.colors.hoverBtns,
    },
    loginForm: {
      text: darkColors.colors.white,
      textPrimery: darkColors.colors.textPrimary,
      bg: darkColors.colors.black,
      btnActive: darkColors.colors.hoverBtns,
      borderActive: darkColors.colors.activeBorder,
      inputBg: darkColors.colors.loginInputBg,
      border: darkColors.colors.borderLoginForm,
      label: darkColors.colors.white,
      focusedInput: darkColors.colors.focusedBorderInput,
      iconBtn: darkColors.colors.activeBorder,
      checkboxBorder: darkColors.colors.activeBorder,
      checkboxChecked: darkColors.colors.checkboxActive,
      paperShadow: darkColors.colors.paperShadow,
      radioBorder: darkColors.colors.textPrimary,
      radioChecked: darkColors.colors.radioActive,
    },
    btns: {
      shadow: darkColors.colors.btnsHoverColor,
    },
  },
  media,
};

