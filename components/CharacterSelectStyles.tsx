export default ({ textColor, textSize }: { textColor: string, textSize: string }) => ({
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
        fontSize: textSize,
        fontWeight: 'bold',
        color: '#' + textColor,
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
        fontSize: textSize,
        color: '#' + textColor,
        // fontSize: '150%',
        fontWeight: 'bold',
        // color: 'blue'
    })
})

// export default customStyles() => ({
//     menu: (provided: any) => ({
//         ...provided,
//         width: 'auto',
//         color: 'black',
//         backgroundColor: 'transparent',
//         textAlign: 'center',
//         position: 'relative',
//         // marginLeft: '30px',
//         // marginRight: '30px',
//     }),
//     control: (provided: any) => ({
//         ...provided,
//         width: 'auto',
//         textAlign: 'center',
//         backgroundColor: 'transparent',
//         position: 'relative',
//         border: 'none',
//         // color: 'blue'
//         // color: 'transparent'
//         // marginLeft: '30px',
//         // marginRight: '30px',
//     }),
//     input: (provided: any, state: any) => ({
//         ...provided,
//         overflow: 'hidden',
//         whiteSpace: 'no-wrap',
//         margin: '0 auto',
//         fontSize: state.selectProps.fontSize,
//         fontWeight: 'bold',
//         color: '#' + state.selectProps.color,
//         // color: 'blue'
//     }),
//     valueContainer: (provided: any) => ({
//         ...provided,
//         textAlign: 'center',
//         position: 'relative',
//         marginLeft: '20px',
//     }),
//     menuList: (provided: any) => ({
//         ...provided,
//         backgroundColor: 'transparent',
//         // color: 'blue'
//     }),
//     indicatorsContainer: () => ({
//         color: 'transparent',
//     }),
//     dropdownIndicator: () => ({
//         // color: 'transparent'
//     }),
//     singleValue: (provided: any, state: any) => ({
//         ...provided,
//         fontSize: state.selectProps.fontSize,
//         color: '#' + state.selectProps.color,
//         // fontSize: '150%',
//         fontWeight: 'bold',
//         // color: 'blue'
//     })
// })
