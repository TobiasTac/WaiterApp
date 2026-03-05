import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
` as any

export const ModalBody = styled.div`
  width: 480px;
  padding: 32px;
  border-radius: 8px;
  background: #fff;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
` as any
