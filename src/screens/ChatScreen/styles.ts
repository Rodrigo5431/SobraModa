import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#342142',
    padding: 15,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
  userName: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  optionsButton: {
    padding: 5,
  },
  optionsButtonText: {
    fontSize: 20,
    color: '#FFF',
  },
  messageList: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  messageListContent: {
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 15,
  },
  sentMessageBubble: {
    backgroundColor: '#8B65BF',
  },
  receivedMessageBubble: {
    backgroundColor: '#C9ACF2',
  },
  messageText: {
    color: '#FFF',
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  messageTime: {
    fontSize: 10,
    color: '#FFF',
  },
  messageStatus: {
    width: 10,
    height: 10,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: '#0F0', // Verde para mensagens lidas
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: '#FFF',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  iconButton: {
    marginHorizontal: 5,
  },
  sendButton: {
    marginLeft: 5,
    backgroundColor: '#342142',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

