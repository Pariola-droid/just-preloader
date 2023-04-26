import Splitting from "splitting";
import { IO } from "./observe";
import gsap from "gsap";

export const split = () => {
    const p = document.querySelectorAll("[data-animation='paragraph']");
    //
    const mOver = document.querySelectorAll("[data-animation='paragraphMO']");
    const mOverr = document.querySelectorAll("[data-animation='paragraphMO1']");
    const mOverrr = document.querySelectorAll("[data-animation='paragraphMO2']");
    //
    const H = document.querySelectorAll("[data-animation='header']");
    const hDelayed = document.querySelectorAll("[data-animation='headerDelayed']");
    const f = document.querySelectorAll("[data-animation='fade']");
    //
    const SCNime = document.querySelector(".services-content-nime");
    const SCNimee = document.querySelector(".services-content-nime1");
    const SCNimeee = document.querySelector(".services-content-nime2");

    p.forEach((item) => {
        const line = Splitting({
            target: item,
            by: "lines",
        });
        line.forEach((splitResult) => {
            const wrappedLines = splitResult.words
                .map(
                    (wordsArr) => `
                       <span class="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`
                )
                .join("");
            splitResult.el.innerHTML = wrappedLines;
        });

        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 105,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });
        IO(item, { threshold: 0.8 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.65 : 0.75,
                ease: "easeOut",
            });
        });
    });

    // 1
    mOver.forEach((item) => {
        const line = Splitting({
            target: item,
            by: "lines",
        });
        line.forEach((splitResult) => {
            const wrappedLines = splitResult.words
                .map(
                    (wordsArr) => `
                   <span class="word_wrap">
                         ${wordsArr.outerHTML}
                    </span>`
                )
                .join("");
            splitResult.el.innerHTML = wrappedLines;
        });

        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 105,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });

        SCNime.addEventListener("mouseover", () => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.65 : 0.75,
                ease: "easeOut",
            });
        });

        SCNime.addEventListener("mouseleave", () => {
            const elem = item.querySelectorAll(".word");

            gsap.to(elem, {
                yPercent: -100,
                opacity: 0,
                rotateX: 90,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.35 : 0.4,
                ease: "easeIn",
            });
        });
    });

    // 2
    mOverr.forEach((item) => {
        const line = Splitting({
            target: item,
            by: "lines",
        });
        line.forEach((splitResult) => {
            const wrappedLines = splitResult.words
                .map(
                    (wordsArr) => `
                       <span class="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`
                )
                .join("");
            splitResult.el.innerHTML = wrappedLines;
        });

        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 105,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });

        SCNimee.addEventListener("mouseover", () => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.65 : 0.75,
                ease: "easeOut",
            });
        });

        SCNimee.addEventListener("mouseleave", () => {
            const elem = item.querySelectorAll(".word");

            gsap.to(elem, {
                yPercent: -100,
                opacity: 0,
                rotateX: 90,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.35 : 0.4,
                ease: "easeIn",
            });
        });
    });

    // 3
    mOverrr.forEach((item) => {
        const line = Splitting({
            target: item,
            by: "lines",
        });
        line.forEach((splitResult) => {
            const wrappedLines = splitResult.words
                .map(
                    (wordsArr) => `
                       <span class="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`
                )
                .join("");
            splitResult.el.innerHTML = wrappedLines;
        });

        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 105,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });

        SCNimeee.addEventListener("mouseover", () => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.65 : 0.75,
                ease: "easeOut",
            });
        });

        SCNimeee.addEventListener("mouseleave", () => {
            const elem = item.querySelectorAll(".word");

            gsap.to(elem, {
                yPercent: -100,
                opacity: 0,
                rotateX: 90,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.35 : 0.4,
                ease: "easeIn",
            });
        });
    });

    hDelayed.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0,
            yPercent: 100,
            transformStyle: "preserve-3d",
        });
        IO(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                stagger: elem.length > 100 ? 0.01 : 0.02,
                duration: elem.length > 100 ? 0.5 : 0.4,
                ease: "easeOut",
                delay: 2,
            });
        });
    });

    H.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0,
            yPercent: 100,
            transformStyle: "preserve-3d",
        });
        IO(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                stagger: elem.length > 100 ? 0.01 : 0.02,
                duration: elem.length > 100 ? 0.5 : 0.6,
                ease: "easeOut",
            });
        });
    });

    f.forEach((item) => {
        gsap.set(item, {
            autoAlpha: 0,
            yPercent: 50,
            transformStyle: "preserve-3d",
        });
        IO(item, { threshold: 0.3 }).then(() => {
            gsap.to(item, {
                autoAlpha: 1,
                yPercent: 0,
                duration: item.length > 100 ? 0.5 : 0.6,
                ease: "easeOut",
            });
        });
    });
};
