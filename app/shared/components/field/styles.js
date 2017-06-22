import { globalStyles } from 'kkbmobile/app/styles';

export default {
  ...globalStyles,
  inputContainer: {
    backgroundColor: 'white'
  },
  errorContainer: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  selectItem: {
    width: 200,
    borderWidth: 0
  },
  selectItemText: {
    textAlign: 'right',
    fontSize: 16
  },
  selectIcon: {
    width: 15,
    tintColor: '#777',
    marginLeft: 5
  }
};