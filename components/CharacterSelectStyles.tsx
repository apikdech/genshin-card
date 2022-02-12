export default ({ textColor, textSize, shadowColor, shadowSize, transparent }: { textColor: string, textSize: string, shadowColor: string, shadowSize: string, transparent: boolean }) => ({
  menu: (provided: any) => ({
    ...provided,
    width: 'auto',
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    position: 'relative',
    // marginLeft: '30px',
    // marginRight: '30px',
  }),
  control: (provided: any) => ({
    ...provided,
    width: 'auto',
    textAlign: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
    border: 'none',
    // color: 'blue'
    // color: 'transparent'
    // marginLeft: '30px',
    // marginRight: '30px',
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    overflow: 'hidden',
    whiteSpace: 'no-wrap',
    margin: '0 auto',
    fontSize: textSize + 'px',
    fontWeight: 'bold',
    color: textColor,
    // color: 'blue'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    textAlign: 'center',
    position: 'relative',
    marginLeft: '20px',
  }),
  menuList: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    // color: 'blue'
  }),
  indicatorsContainer: () => ({
    color: 'transparent',
  }),
  dropdownIndicator: () => ({
    // color: 'transparent'
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontSize: textSize + 'px',
    // fontSize: '25px',
    color: transparent ? 'transparent' : textColor,
    textShadow: transparent ? '' : `1px 1px ${shadowSize}px ${shadowColor}`,
    // '1px 1px 10px #1f63d4',
    // color: 'transparent',
    // fontSize: '150%',
    fontWeight: 'bold',
    // color: 'blue'
  })
})
