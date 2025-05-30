import { PropType } from 'vue';
import type { AnimationSegment } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    animationData: {
        type: PropType<any>;
        default: () => {};
    };
    animationLink: {
        type: PropType<string>;
        default: string;
    };
    loop: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    autoPlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    speed: {
        type: PropType<number>;
        default: number;
    };
    delay: {
        type: PropType<number>;
        default: number;
    };
    direction: {
        type: PropType<string>;
        default: string;
    };
    pauseOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    playOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    backgroundColor: {
        type: PropType<string>;
        default: string;
    };
    pauseAnimation: {
        type: PropType<boolean>;
        default: boolean;
    };
    noMargin: {
        type: PropType<boolean>;
        default: boolean;
    };
    scale: {
        type: PropType<number>;
        default: number;
    };
    renderer: {
        type: PropType<string>;
        default: string;
    };
    rendererSettings: {
        type: PropType<any>;
        default: () => {};
    };
    assetsPath: {
        type: PropType<string>;
        default: string;
    };
}, {
    lottieAnimationContainer: import("vue").Ref<HTMLDivElement | undefined>;
    hoverEnded: () => void;
    hoverStarted: () => void;
    getCurrentStyle: any;
    play: () => void;
    pause: () => void;
    stop: () => void;
    destroy: () => void;
    setSpeed: (speed?: number) => void;
    setDirection: (direction: 'forward' | 'reverse') => void;
    goToAndStop: (frame: number, isFrame?: boolean) => void;
    goToAndPlay: (frame: number, isFrame?: boolean) => void;
    playSegments: (segments: AnimationSegment | AnimationSegment[], forceFlag?: boolean) => void;
    setSubFrame: (useSubFrame?: boolean) => void;
    getDuration: (inFrames?: boolean) => number | undefined;
    updateDocumentData: (documentData: any, index?: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onComplete: null;
    onLoopComplete: null;
    onEnterFrame: null;
    onSegmentStart: null;
    onAnimationLoaded: null;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    animationData: {
        type: PropType<any>;
        default: () => {};
    };
    animationLink: {
        type: PropType<string>;
        default: string;
    };
    loop: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    autoPlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    speed: {
        type: PropType<number>;
        default: number;
    };
    delay: {
        type: PropType<number>;
        default: number;
    };
    direction: {
        type: PropType<string>;
        default: string;
    };
    pauseOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    playOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    backgroundColor: {
        type: PropType<string>;
        default: string;
    };
    pauseAnimation: {
        type: PropType<boolean>;
        default: boolean;
    };
    noMargin: {
        type: PropType<boolean>;
        default: boolean;
    };
    scale: {
        type: PropType<number>;
        default: number;
    };
    renderer: {
        type: PropType<string>;
        default: string;
    };
    rendererSettings: {
        type: PropType<any>;
        default: () => {};
    };
    assetsPath: {
        type: PropType<string>;
        default: string;
    };
}>> & {
    onOnComplete?: ((...args: any[]) => any) | undefined;
    onOnLoopComplete?: ((...args: any[]) => any) | undefined;
    onOnEnterFrame?: ((...args: any[]) => any) | undefined;
    onOnSegmentStart?: ((...args: any[]) => any) | undefined;
    onOnAnimationLoaded?: ((...args: any[]) => any) | undefined;
}, {
    animationData: any;
    animationLink: string;
    loop: number | boolean;
    autoPlay: boolean;
    width: string | number;
    height: string | number;
    speed: number;
    delay: number;
    direction: string;
    pauseOnHover: boolean;
    playOnHover: boolean;
    backgroundColor: string;
    pauseAnimation: boolean;
    noMargin: boolean;
    scale: number;
    renderer: string;
    rendererSettings: any;
    assetsPath: string;
}, {}>;
export default _sfc_main;
