const algorithmTestA = text => {
    let s = text.split('');
    for (let i = 0; i < s.length; i++) {

        const charCode = s[i].charCodeAt(0)

        if(charCode !== 241 && (charCode < 97 || charCode > 122)) continue
        
        switch(s[i]) {
            case 'z':
                s[i] = 'a';
                break;
            case 'ñ':
                s[i] = 'o';
                break;
            case 'n':
                s[i] = 'ñ';
                break;
            default:
                s[i] = String.fromCharCode(1 + charCode);
                break;
        }

    }

    return s.join('');
}

module.exports = algorithmTestA;
