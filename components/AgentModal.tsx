'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import Modal from '@/components/common/Modal';
import AnchorLink from '@/components/common/AnchorLink';
import Button from '@/components/common/Button';

import { AGENT_DETAILS } from '@/constants/texts';

import roseCastro from '@/images/rose-castro.jpg';

const {
  NAME: AGENT_NAME,
  COMPANY: { NAME: COMPANY_NAME, WEBSITE, PHONE: COMPANY_PHONE },
  DESIGNATION,
  EMAIL,
  PHONE,
  BIO,
  TREC_LICENSE
} = AGENT_DETAILS;

const AgentModal = () => {
  const [showAgentModal, setShowAgentModal] = useState(false);

  return (
    <>
      <Button type='primary' onClick={() => setShowAgentModal(true)}>
        View Bio
      </Button>
      {showAgentModal && (
        <Modal onClose={() => setShowAgentModal(false)}>
          <div className='agent-modal__header'>
            <Image
              className='agent-modal__img'
              src={roseCastro}
              alt='Roose Castro'
            />
            <div className='agent-modal__contact'>
              <h2 className='heading-tertiary u-highlight-text-primary u-margin-bottom-small'>
                {AGENT_NAME}
              </h2>
              <div>
                <AnchorLink linkTo={WEBSITE} type='primary' openInNewTab={true}>
                  {COMPANY_NAME}
                </AnchorLink>{' '}
                <span>/ {DESIGNATION}</span>
              </div>
              <AnchorLink linkTo={`mailto:${EMAIL}`} type='primary'>
                {EMAIL}
              </AnchorLink>
              <div>
                <span>Mobile:</span>{' '}
                <AnchorLink linkTo={`tel:${PHONE}`} type='primary'>
                  {PHONE}
                </AnchorLink>
              </div>
            </div>
          </div>

          <div className='agent-modal__content'>
            <h3 className='u-highlight-text-primary agent-modal__content-heading u-margin-bottom-small'>
              {DESIGNATION} - {COMPANY_NAME}
            </h3>
            <p>{BIO}</p>
            <ul className='agent-modal__info-list'>
              <li>
                <span>Mobile:</span>{' '}
                <AnchorLink linkTo={`tel:${PHONE}`} type='primary'>
                  {PHONE}
                </AnchorLink>
              </li>
              <li>
                <span>Office:</span>{' '}
                <AnchorLink linkTo={`tel:${COMPANY_PHONE}`} type='primary'>
                  {COMPANY_PHONE}
                </AnchorLink>
              </li>
              <li>
                <span>Email:</span>{' '}
                <AnchorLink linkTo={`mailto:${EMAIL}`} type='primary'>
                  {EMAIL}
                </AnchorLink>
              </li>
              <li>
                <span>Website:</span>{' '}
                <AnchorLink linkTo={WEBSITE} type='primary'>
                  {WEBSITE}
                </AnchorLink>
              </li>
              <li>
                <span>TREC License:</span> <span>{TREC_LICENSE}</span>
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AgentModal;
