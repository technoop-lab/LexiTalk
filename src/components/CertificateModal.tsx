import React from 'react';
import { CEFRLevel, UserAcademyProfile } from '../types';
import { GraduationCertificateModal } from './celebrations/GraduationCertificateModal';

interface CertificateModalProps {
  user: UserAcademyProfile;
  cefr: CEFRLevel | string;
  daysCompleted?: number;
  vocabLearned?: number;
  dialoguesCompleted?: number;
  totalXp?: number;
  speakingMinutes?: number;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  user,
  cefr,
  daysCompleted = 0,
  vocabLearned = 0,
  dialoguesCompleted = 0,
  totalXp,
  speakingMinutes,
  onClose,
}) => {
  return (
    <GraduationCertificateModal
      user={user}
      cefr={cefr}
      daysCompleted={daysCompleted}
      vocabLearned={vocabLearned}
      dialoguesCompleted={dialoguesCompleted}
      totalXp={totalXp}
      speakingMinutes={speakingMinutes}
      onClose={onClose}
    />
  );
};

