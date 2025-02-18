function a1_0x4d8e() {
    const _0x3effdc = [
        'forEach', 'showStart', 'querySelector', 'body', 'exports', 'gamebridge', 
        'gamebridge-sdk-core', 'createElement', 'data-test', 'toStringTag', 
        'defineProperty', 'data-version', '__esModule', 'text/javascript', 
        'getAttribute', 'type', 'showAd', 'script', 'src', '#gamebridge-sdk', 
        'parentNode', 'object', 'lastChild', 'setAttribute', 'Module', 'showPause', 
        'data-gameid', 'arguments', 'nextSibling', 'insertBefore', 'appendChild', 
        'ready'
    ];
    a1_0x4d8e = function () {
        return _0x3effdc;
    };
    return a1_0x4d8e();
}

function a1_0x3a78(_0x160704, _0x4e3442) {
    const _0x4d8ecc = a1_0x4d8e();
    return a1_0x3a78 = function (_0x3a78b5, _0xd2139a) {
        _0x3a78b5 = _0x3a78b5 - 0xe2;
        let _0xf0e6f4 = _0x4d8ecc[_0x3a78b5];
        return _0xf0e6f4;
    }, a1_0x3a78(_0x160704, _0x4e3442);
}

(function (_0x51858a, _0x5885e5) {
    const _0x3e5b43 = a1_0x3a78, _0x523311 = _0x51858a();
    while (!![]) {
        try {
            const _0x48d793 = parseInt(_0x3e5b43(0xe5)) / 0x1 +
                parseInt(_0x3e5b43(0xf9)) / 0x2 * (parseInt(_0x3e5b43(0x109)) / 0x3) +
                parseInt(_0x3e5b43(0xed)) / 0x4 * (parseInt(_0x3e5b43(0xf5)) / 0x5) +
                -parseInt(_0x3e5b43(0x104)) / 0x6 * (parseInt(_0x3e5b43(0x106)) / 0x7) +
                -parseInt(_0x3e5b43(0xf3)) / 0x8 + -parseInt(_0x3e5b43(0xf0)) / 0x9 +
                parseInt(_0x3e5b43(0xee)) / 0xa;
            if (_0x48d793 === _0x5885e5) break;
            else _0x523311['push'](_0x523311['shift']());
        } catch (_0x33df42) {
            _0x523311['push'](_0x523311['shift']());
        }
    }
}(a1_0x4d8e, 0x4e4f7));

!function (_0x2e79ce, _0x322150) {
    const _0x39f90d = a1_0x3a78;
    if ('object' == typeof exports && _0x39f90d(0xf7) == typeof module)
        module[_0x39f90d(0x10d)] = _0x322150();
    else {
        if ('function' == typeof define && define['amd']) 
            define([], _0x322150);
        else {
            var _0x3946d2 = _0x322150();
            for (var _0x4dc77d in _0x3946d2) 
                ('object' == typeof exports ? exports : _0x2e79ce)[_0x4dc77d] = _0x3946d2[_0x4dc77d];
        }
    }
}(self, () => {
    'use strict';

    var _0x1f23ae = {
        'r': _0x5a73b4 => {
            const _0x435e90 = a1_0x3a78;
            'undefined' != typeof Symbol &&
                Symbol[_0x435e90(0xe6)] &&
                Object[_0x435e90(0xe7)](_0x5a73b4, Symbol[_0x435e90(0xe6)], { 'value': _0x435e90(0xfb) }),
                Object[_0x435e90(0xe7)](_0x5a73b4, _0x435e90(0xe9), { 'value': !0x0 });
        }
    };

    var _0x318e58 = {};
    _0x1f23ae['r'](_0x318e58);

    function _0x57378f() {
        const _0xcc2ea6 = a1_0x3a78,
            _0x1da90d = document[_0xcc2ea6(0x10b)](_0xcc2ea6(0xf4)),
            _0x53eb0f = _0x1da90d[_0xcc2ea6(0xf6)],
            _0x5c1730 = document[_0xcc2ea6(0xe3)](_0xcc2ea6(0xf1)),
            _0x3010cb = _0x1da90d['getAttribute'](_0xcc2ea6(0xe8)) || '1.0.6';

        _0x5c1730['id'] = _0xcc2ea6(0xe2);
        _0x5c1730[_0xcc2ea6(0xf2)] = ''; // Removed external script URL
        _0x5c1730[_0xcc2ea6(0xec)] = _0xcc2ea6(0xea);

        function setupGamebridge(_0x4326c5) {
            const _0x305d45 = _0xcc2ea6,
                _0xf0f2d7 = ['showAd', 'showPreroll', 'showPause', 'showNext', 'showBrowse', 'showReward'];

            if (!window['gamebridge']) {
                const _0x119d61 = { 'version': _0x4326c5, 'ready': !1 };
                _0xf0f2d7.forEach(_0x124a64 => {
                    _0x119d61[_0x124a64] = function () { };
                });
                window['gamebridge'] = _0x119d61;
            }
        }

        setupGamebridge(_0x3010cb);

        ['data-ad-frequency', 'data-gameid'].forEach(_0x15c94f => {
            if (_0x1da90d['getAttribute'](_0x15c94f) && _0xcc2ea6(0xe8) !== _0x15c94f) {
                _0x5c1730.setAttribute(_0x15c94f, _0x1da90d.getAttribute(_0x15c94f));
            }
        });

        _0x5c1730.onload = () => {
            const _0xd41718 = setInterval(() => {
                if (window['gamebridge']['ready']) {
                    window.clearInterval(_0xd41718);
                }
            }, 100);
        };

        if (_0x53eb0f && _0x53eb0f[_0xcc2ea6(0xf8)]) {
            _0x53eb0f[_0xcc2ea6(0x103)](_0x5c1730);
        } else {
            document[_0xcc2ea6(0x10c)][_0xcc2ea6(0x103)](_0x5c1730);
        }
    }

    _0x57378f();
    return _0x318e58;
});
