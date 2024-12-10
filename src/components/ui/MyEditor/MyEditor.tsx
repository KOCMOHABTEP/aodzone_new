import React, { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';

import { Button } from '@/components/ui/Button';
import styles from './MyEditor.module.scss';

interface MyEditorProps {
  img?: string;
  setEditorRef?: () => void;
  onCrop?: () => void;
  scaleValue?: number;
  onScaleChange?: () => void;
}

export const MyEditor = ({
  img,
  setEditorRef,
  onCrop,
  scaleValue,
  onScaleChange,
}: MyEditorProps) => {
  return (
    <div className={styles.item}>
      <AvatarEditor
        ref={setEditorRef}
        image={img}
        width={150}
        height={150}
        border={10}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={scaleValue}
        rotate={0}
      />
      <div>
        <input name="avatarUser" type="file" />
      </div>
      <input
        type="range"
        value={scaleValue}
        onChange={onScaleChange}
        className={styles.input}
      />
      <Button
        onClick={onCrop}
        text="Загрузить"
        buttonClassName={styles.buttonBtn}
      />
    </div>
  );
};
