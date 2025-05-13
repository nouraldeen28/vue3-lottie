import { PropType } from 'vue';
import type { AnimationDirection, AnimationSegment } from './types';
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
    currentFrame: import("vue").Ref<number>;
    instance: import("vue").Ref<{
        name: string;
        isLoaded: boolean;
        currentFrame: number;
        currentRawFrame: number;
        firstFrame: number;
        totalFrames: number;
        frameRate: number;
        frameMult: number;
        playSpeed: number;
        playDirection: number;
        playCount: number;
        isPaused: boolean;
        autoplay: boolean;
        loop: number | boolean;
        renderer: any;
        animationID: string;
        assetsPath: string;
        timeCompleted: number;
        segmentPos: number;
        isSubframeEnabled: boolean;
        segments: [number, number] | [number, number][];
        play: (name?: string | undefined) => void;
        stop: (name?: string | undefined) => void;
        togglePause: (name?: string | undefined) => void;
        destroy: (name?: string | undefined) => void;
        pause: (name?: string | undefined) => void;
        goToAndStop: (value: string | number, isFrame?: boolean | undefined, name?: string | undefined) => void;
        goToAndPlay: (value: string | number, isFrame?: boolean | undefined, name?: string | undefined) => void;
        includeLayers: (data: any) => void;
        setSegment: (init: number, end: number) => void;
        resetSegments: (forceFlag: boolean) => void;
        hide: () => void;
        show: () => void;
        resize: () => void;
        setSpeed: (speed: number) => void;
        setDirection: (direction: AnimationDirection) => void;
        setLoop: (isLooping: boolean) => void;
        playSegments: (segments: AnimationSegment | AnimationSegment[], forceFlag?: boolean | undefined) => void;
        setSubframe: (useSubFrames: boolean) => void;
        getDuration: (inFrames?: boolean | undefined) => number;
        triggerEvent: <T extends import("lottie-web").AnimationEventName>(name: T, args: import("lottie-web").AnimationEvents[T]) => void;
        addEventListener: <T_1 extends import("lottie-web").AnimationEventName>(name: T_1, callback: import("lottie-web").AnimationEventCallback<import("lottie-web").AnimationEvents[T_1]>) => () => void;
        removeEventListener: <T_2 extends import("lottie-web").AnimationEventName>(name: T_2, callback?: import("lottie-web").AnimationEventCallback<import("lottie-web").AnimationEvents[T_2]> | undefined) => void;
    } | null>;
    currentSetSpeed: import("vue").Ref<number>;
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
    onDrawnFrame: null;
    onHoverStart: null;
    onHoverEnd: null;
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
    onOnDrawnFrame?: ((...args: any[]) => any) | undefined;
    onOnHoverStart?: ((...args: any[]) => any) | undefined;
    onOnHoverEnd?: ((...args: any[]) => any) | undefined;
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
