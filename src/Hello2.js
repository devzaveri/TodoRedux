import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
  alert,
  Alert,
} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addTodo, Dlttodo, editTodo} from '../src2/redux/TDAction';
import Modal from 'react-native-modal';
// import {Dlt_ToDo} from '../src2/redux/TDActionType';

// import { Edit_ToDo } from '../src2/redux/TDActionType';

const Hello2 = props => {
  const [text, setText] = useState('');
  const [indexVal, setInderVal] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [newText, setNewText] = useState('');
  const handleOnPress = index => {
    setInderVal(index);
    // console.log(index);
  };
  // console.log('Index==>', indexVal);

  handledlt = id => {
    // console.log(props.add);
    props.add(dlt => dlt.filter(item => item.id !== id));
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        padding: 20,
      }}>
      <Text>To Do List</Text>
      <TextInput
        value={text}
        onChangeText={text => {
          setText(text);
        }}
        style={{
          height: 50,
          width: '100%',
          borderWidth: 1,
          marginTop: 12,
          padding: 10,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.addTask(text);
          setText('');
        }}
        style={{
          height: 50,
          width: 100,
          backgroundColor: '#000',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
          }}>
          Add
        </Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={item => item.id}
        data={props.add}
        renderItem={({item}) => {
          // console.log('item==>', item);
          return (
            <View>
              <Modal isVisible={isModalVisible}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <Text
                    style={{
                      color: '#fff',
                    }}>
                    {item.parameter}
                  </Text> */}
                  <TextInput
                    onChangeText={text => {
                      setNewText(text);
                    }}
                    style={{
                      borderBottomWidth: 1,
                      color: '#fff',
                      padding: 10,
                      borderColor: '#fff',
                    }}
                    // value={item.parameter}
                    placeholder="Edit here..."
                    placeholderTextColor={'#fff'}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      props.editTask(newText, item.id);
                      // console.log('Id==>', item.id);
                    }}
                    style={{
                      height: 50,
                      width: 100,
                      borderWidth: 1,
                      borderColor: '#fff',
                      marginTop: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                    }}>
                    <Text>Hide</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity
                onPress={() => {
                  // console.log('id==>', item.id);
                  // props.dltTodo(item.id);
                  // setModalVisible(true);
                  Alert.alert('Action', {text}, [
                    {
                      text: 'Edit',
                      onPress: () => {
                        toggleModal();
                      },
                      // onPress={()=> {}}
                      // style: 'cancel',
                    },
                    {
                      text: 'Delete',
                      onPress: () => props.dltTodo(item.id),
                    },
                  ]);
                }}
                style={{
                  // height: 50,
                  width: '100%',
                  borderWidth: 1,
                  marginTop: 20,
                  padding: 10,
                  borderRadius: 20,
                  paddingRight: 20,
                }}>
                <Text>{item.parameter}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    // borderWidth: 1,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    add: state.add,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTask: parameter => {
      dispatch(addTodo(parameter));
    },
    dltTodo: parameterE => {
      dispatch(Dlttodo(parameterE));
    },
    editTask: (P, id) => {
      dispatch(editTodo(P, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello2);
