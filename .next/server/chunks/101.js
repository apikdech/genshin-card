exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 107:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "CustomStyle_image__Rojwp",
	"container": "CustomStyle_container__C9ICE",
	"flex-container": "CustomStyle_flex-container__4GXbM",
	"swatch": "CustomStyle_swatch__tsMTF",
	"popover": "CustomStyle_popover__WUmKd",
	"cover": "CustomStyle_cover__uWdl7",
	"color-box": "CustomStyle_color-box__vJAtQ",
	"text-left": "CustomStyle_text-left__SbMhR",
	"text-url": "CustomStyle_text-url__gKJvj",
	"checkbox-container": "CustomStyle_checkbox-container__e18Q3",
	"checkmark": "CustomStyle_checkmark__Ni_L8"
};


/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CharacterDisplay)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/ImageLoader.tsx


/* harmony default export */ const ImageLoader = (({ imageName  })=>/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
        src: `/assets/${imageName}`,
        width: "100%",
        height: "100%",
        alt: `${imageName}`,
        unoptimized: true
    }));

;// CONCATENATED MODULE: ./components/CharacterSelectStyles.tsx
/* harmony default export */ const CharacterSelectStyles = (({ textColor , textSize , shadowColor , shadowSize , transparent  })=>({
        menu: (provided)=>({
                ...provided,
                width: 'auto',
                color: 'black',
                backgroundColor: 'transparent',
                textAlign: 'center',
                position: 'relative'
            })
        ,
        control: (provided)=>({
                ...provided,
                width: 'auto',
                textAlign: 'center',
                backgroundColor: 'transparent',
                position: 'relative',
                border: 'none'
            })
        ,
        input: (provided, state)=>({
                ...provided,
                overflow: 'hidden',
                whiteSpace: 'no-wrap',
                margin: '0 auto',
                fontSize: textSize + 'px',
                fontWeight: 'bold',
                color: textColor
            })
        ,
        valueContainer: (provided)=>({
                ...provided,
                textAlign: 'center',
                position: 'relative',
                marginLeft: '20px'
            })
        ,
        menuList: (provided)=>({
                ...provided,
                backgroundColor: 'transparent'
            })
        ,
        indicatorsContainer: ()=>({
                color: 'transparent'
            })
        ,
        dropdownIndicator: ()=>({
            })
        ,
        singleValue: (provided, state)=>({
                ...provided,
                fontSize: textSize + 'px',
                // fontSize: '25px',
                color: transparent ? 'transparent' : textColor,
                textShadow: transparent ? '' : `1px 1px ${shadowSize}px ${shadowColor}`,
                // '1px 1px 10px #1f63d4',
                // color: 'transparent',
                // fontSize: '150%',
                fontWeight: 'bold'
            })
    }));

// EXTERNAL MODULE: ./components/CustomStyle.module.css
var CustomStyle_module = __webpack_require__(107);
var CustomStyle_module_default = /*#__PURE__*/__webpack_require__.n(CustomStyle_module);
;// CONCATENATED MODULE: ./const/character.ts
const characters = [
    {
        value: 'aether.webp',
        label: 'Aether'
    },
    {
        value: 'albedo.png',
        label: 'Albedo'
    },
    {
        value: 'aloy.png',
        label: 'Aloy'
    },
    {
        value: 'amber.png',
        label: 'Amber'
    },
    {
        value: 'ayaka.png',
        label: 'Ayaka'
    },
    {
        value: 'barbara.png',
        label: 'Barbara'
    },
    {
        value: 'beidou.png',
        label: 'Beidou'
    },
    {
        value: 'bennett.webp',
        label: 'Bennett'
    },
    {
        value: 'childe.png',
        label: 'Tartaglia'
    },
    {
        value: 'chongyun.png',
        label: 'Chongyun'
    },
    {
        value: 'diluc.webp',
        label: 'Diluc'
    },
    {
        value: 'diona.png',
        label: 'Diona'
    },
    {
        value: 'eula.png',
        label: 'Eula'
    },
    {
        value: 'fischl.png',
        label: 'Fischl'
    },
    {
        value: 'ganyu.png',
        label: 'Ganyu'
    },
    {
        value: 'gorou.png',
        label: 'Gorou'
    },
    {
        value: 'hutao.png',
        label: 'Hu Tao'
    },
    {
        value: 'itto.png',
        label: 'Itto'
    },
    {
        value: 'jean.png',
        label: 'Jean'
    },
    {
        value: 'kaeya.png',
        label: 'Kaeya'
    },
    {
        value: 'kazuha.png',
        label: 'Kazuha'
    },
    {
        value: 'keqing.png',
        label: 'Keqing'
    },
    {
        value: 'kokomi.png',
        label: 'Kokomi'
    },
    {
        value: 'klee.png',
        label: 'Klee'
    },
    {
        value: 'lisa.png',
        label: 'Lisa'
    },
    {
        value: 'lumine.png',
        label: 'Lumine'
    },
    {
        value: 'mona.png',
        label: 'Mona'
    },
    {
        value: 'ningguang.png',
        label: 'Ningguang'
    },
    {
        value: 'noelle.webp',
        label: 'Noelle'
    },
    {
        value: 'qiqi.png',
        label: 'Qiqi'
    },
    {
        value: 'raiden.png',
        label: 'Raiden'
    },
    {
        value: 'razor.webp',
        label: 'Razor'
    },
    {
        value: 'rosaria.png',
        label: 'Rosaria'
    },
    {
        value: 'sara.png',
        label: 'Kujou Sara'
    },
    {
        value: 'sayu.webp',
        label: 'Sayu'
    },
    {
        value: 'shenhe.png',
        label: 'Shenhe'
    },
    {
        value: 'sucrose.png',
        label: 'Sucrose'
    },
    {
        value: 'thoma.png',
        label: 'Thoma'
    },
    {
        value: 'venti.png',
        label: 'Venti'
    },
    {
        value: 'xiangling.png',
        label: 'Xiangling'
    },
    {
        value: 'xiao.png',
        label: 'Xiao'
    },
    {
        value: 'xingqiu.png',
        label: 'Xingqiu'
    },
    {
        value: 'xinyan.png',
        label: 'Xinyan'
    },
    {
        value: 'yae.png',
        label: 'Yae Miko'
    },
    {
        value: 'yanfei.png',
        label: 'Yanfei'
    },
    {
        value: 'yoimiya.png',
        label: 'Yoimiya'
    },
    {
        value: 'yunjin.png',
        label: 'Yun Jin'
    },
    {
        value: 'zhongli.png',
        label: 'Zhongli'
    }
].sort((a, b)=>a.label < b.label ? -1 : 1
);

;// CONCATENATED MODULE: ./utils/GetCharacters.tsx

function getCharacters(exclude) {
    let result = characters;
    for(let index = 0; index < exclude.length; index++){
        let exChar = {
            value: exclude[index].value,
            label: exclude[index].label
        };
        result = result.filter((item)=>item.label !== exChar.label
        );
    }
    return result;
};

;// CONCATENATED MODULE: ./components/CharacterDisplay.tsx






function CharacterDisplay({ id , characterState , setCharacterState , tw , th , textColor , textSize , marginLeft , transparent , shadowSize , shadowColor  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CustomStyle_module_default()).container,
        style: {
            width: tw,
            height: th,
            marginLeft: marginLeft
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CustomStyle_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ImageLoader, {
                    imageName: characterState[id].value
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "character",
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                    id: "long-value-select",
                    instanceId: "long-value-select",
                    styles: CharacterSelectStyles({
                        textColor,
                        textSize,
                        shadowSize,
                        shadowColor,
                        transparent
                    }),
                    value: {
                        value: characterState[id].value,
                        label: characterState[id].label
                    },
                    onChange: (param)=>setCharacterState(characterState.map((ch)=>ch.id === id ? {
                                ...ch,
                                label: param.label,
                                value: param.value
                            } : {
                                ...ch
                            }
                        ))
                    ,
                    options: getCharacters(characterState)
                })
            })
        ]
    }));
};


/***/ })

};
;