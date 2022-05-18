import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../contexts/globalContext';
const DEFAULT_TEXT = 'SAMPLE TEXT';

/**
 * @description 다운로드가 가능한 텍스트 배너를 미리 보여줍니다
 */
const TextBannerPreview = () => {
  const { state, actions } = useContext(GlobalContext);
  const {
    canvasText,
    canvasFontSize,
    canvasFontFamily,
    canvasWidth,
    canvasHeight,
    canvasBackgroundColor,
    canvasFontColor,
  } = state;

  const { setCanvasImageDownlink } = actions;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    render();
  }, [
    canvasText,
    canvasFontSize,
    canvasFontFamily,
    canvasWidth,
    canvasHeight,
    canvasBackgroundColor,
    canvasFontColor,
    setCanvasImageDownlink,
  ]);

  const render = async () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.fillStyle = canvasBackgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setCanvasFont(canvas, {
      color: canvasFontColor,
      size: canvasFontSize,
      family: canvasFontFamily,
    });

    drawText(canvas, canvasText || DEFAULT_TEXT, 40);
    setCanvasImageDownlink(canvas.toDataURL());
  };

  return (
    <TextBannerPreviewStyledWrapper>
      <canvas ref={canvasRef} />
    </TextBannerPreviewStyledWrapper>
  );
};

const TextBannerPreviewStyledWrapper = styled.div`
  text-align: center;
  margin: 10px auto;
  /* overflow: hidden; */
  /* width: 300px; */
`;

/**
 *
 * @param {*} canvas canvas element
 * @param {*} params font size, font color, font family
 * @description 캔버스의 들어갈 폰트의 size와 color, 글씨체를 설정해줍니다.
 */
export const setCanvasFont = (canvas: HTMLCanvasElement, params: { color: string; size: number; family: string }) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const { color, size, family } = params;
  ctx.font = `${size}px ${family}`;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
};

/**
 * @param {*} canvas canvas element
 * @param {*} text banner text
 * @param {*} fontSize text size
 * @description 캔버스 배너 가운데에 텍스트를 기입합니다
 */
export const drawText = (canvas: HTMLCanvasElement, text: string, fontSize: number) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const defaultWidth = canvas.width / 2;
  const defaultHeight = canvas.height / 2;
  const fontHeight = fontSize * 1.4;
  const SEPARATOR = '\\n';
  const lines = text.split(SEPARATOR);

  if (lines.length % 2) {
    lines.map((line, index) => {
      const middle = parseInt((lines.length / 2).toString(), 10);
      const h = defaultHeight + (index - middle) * fontHeight;
      ctx.fillText(line, defaultWidth, h);
      return null;
    });
  } else {
    const mid = (lines.length - 1) / 2;

    const offsets = lines
      .map((line, index) => index)
      .reduce<[boolean, number][]>((prev, curr) => {
        const subtract = curr - mid;
        const isMinus = subtract < 0;
        prev.push([isMinus, parseInt(subtract.toString(), 10)]);
        return prev;
      }, []);

    offsets.map(([sign, offset], index) => {
      const position = offset * fontHeight;
      const e = sign ? (fontHeight / 2) * -1 : fontHeight / 2;
      const h = defaultHeight + position + e;
      ctx.fillText(lines[index], defaultWidth, h);
      return null;
    });
  }
};

export default TextBannerPreview;
