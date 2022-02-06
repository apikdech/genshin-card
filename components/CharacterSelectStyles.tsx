export const customStyles = {
    menu: (provided: any, state: any) => ({
        ...provided,
        width: 'auto',
        color: 'black',
        backgroundColor: 'transparent',
        textAlign: 'center',
        position: 'relative',
        // marginLeft: '30px',
        // marginRight: '30px',
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        width: 'auto',
        textAlign: 'center',
        backgroundColor: 'transparent',
        position: 'relative',
        // marginLeft: '30px',
        // marginRight: '30px',
    }),
    input: (provided: any, state: any) => ({
        ...provided,
        overflow: 'hidden',
        whiteSpace: 'no-wrap',
        margin: '0 auto',
    }),
    valueContainer: (provided: any, state: any) => ({
        ...provided,
        textAlign: 'center',
        position: 'relative',
        marginLeft: '30px'
    }),
    menuList: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: 'transparent',
    })
}