import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
import { Dimensions } from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen({ navigation }) {
    const items = [
        {
            name: 'Document assessment',
            icon: require('./Images/Docu.png'),
            route: 'DocumentAssessment',
        },
        {
            name: 'Face match service',
            icon: require('./Images/Facematch.png'),
            route: 'FaceMatchService',
        },
        {
            name: 'Liveness service',
            icon: require('./Images/Liveness.jpg'),
            route: 'LivenessService',
        },
        {
            name: 'NFC passport reader',
            icon: require('./Images/NFC.jpg'),
            route: 'NFCPassportReader',
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: 'black', height: 150, marginTop: 0 }}>
                <Image source={require('./Images/company_logo.png')} style={{ width: '40%', height: '100%', resizeMode: 'contain', alignSelf: 'flex-start', marginTop: 25 }} />
                <Image source={require('./Images/person_icon.png')} style={{ width: 30, height: 30, backgroundColor: 'white', borderRadius: 15, borderWidth: 2, borderColor: 'green', marginTop: 25 }} />
                {/* <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginRight: 10, alignSelf: 'flex-end' }}>
                </TouchableOpacity> */}
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: 'black', marginTop: 0 }}>
                    <Table>
                        {items.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => navigation.navigate(item.route)}
                            >
                                <View style={{ height: windowHeight * 0.18, width: windowWidth * 0.95, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' }}>
                                    <Image source={item.icon} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                                    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                        <Text style={{ color: 'white', fontSize: windowWidth * 0.04, fontWeight: 'bold' }}>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </Table>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

