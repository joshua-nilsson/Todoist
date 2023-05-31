import React, { useState } from 'react';
import Modal from 'react-modal';
import Toggle from 'react-toggle';
import { useLocalStorage } from 'usehooks-ts';
import { FiAlertCircle } from 'react-icons/fi';

export default function Header() {
  const [isChecked, setIsChecked] = useLocalStorage('checked', false);
  const [isOpen, setIsOpen] = useState(!isChecked);

  Modal.setAppElement('#root');

  return (
    <>
      <div className="mt-4 px-[0.425rem] xl:px-0">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="modal__button"
        >
          <FiAlertCircle className="modal__buttonIcon" />
        </button>
      </div>

      <Modal
        className="modal__dialog"
        isOpen={isOpen}
        contentLabel="Modal Alert"
        onRequestClose={() => setIsOpen(!isOpen)}
      >
        <h3 className="modal__dialogTitle">
          <FiAlertCircle className="modal__dialogIcon" /> NOT THE ACTUAL WEBSITE
        </h3>
        <div className="modal__dialogFrame">
          <p className="modal__dialogDisclaimer">
            This website is{' '}
            <strong>
              <u>NOT</u>
            </strong>{' '}
            Todoist.
            <br />
            Please do not enter any sensitive information.
          </p>
          <p className="modal__dialogClarification">
            You are viewing a project built for the purpose of mastery in my
            skillset as a Front-End Software Engineer.
          </p>
        </div>
        <div className="modal__dialogFrame">
          <button
            className="modal__dialogButton"
            onClick={() => setIsOpen(!isOpen)}
          >
            Got it, thanks!
          </button>
          <label className="modal__toggleFrame">
            <Toggle
              checked={isChecked}
              className={`${isChecked ? 'active' : 'inactive'} modal__toggle`}
              icons={false}
              onChange={() => setIsChecked(!isChecked)}
              onKeyDown={({ key }) =>
                key === 'Enter' && setIsChecked(!isChecked)
              }
            />
            <span className="modal_toggleMessage">Do not show again</span>
          </label>
        </div>
      </Modal>
    </>
  );
}
