import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useConnect } from "wagmi";
import { useGeneral } from "../../context/General";

const ConnectModal = () => {
  const { connectors, error, connect } = useConnect();
  const { onClose, isOpen: isModalOpen } = useGeneral();

  const handleConnect = (connector: any) => {
    connect(connector);
    onClose();
  };

  console.log('hello', isModalOpen)
  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="stretch" pb={4}>
            {connectors.map((connector) => (
              <Button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => handleConnect(connector)}
              >
                {connector.name}
                {!connector.ready && " (unsupported)"}
              </Button>
            ))}
            {error && <div>{error?.message ?? "Failed to connect"}</div>}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectModal;
