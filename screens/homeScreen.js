import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const homeScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container1}>

            <View style={styles.iconContainer}>
                <Ionicons name="person-circle-outline" size={32} color="#40916c" onPress={()=> {navigation.navigate("Log in")}} />
                <Ionicons name="cart-outline" size={32} color="#40916c" onPress={()=> {navigation.navigate("")}}/>
            </View>


            <View style={styles.titleContainer}>
                <Text style={styles.title}>DM FURNITURE LIMITED</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput style={styles.searchText} placeholder='search'></TextInput>
                <Ionicons name="search-circle-outline" size={32} color="#40916c"/>
            </View>


            <View style={styles.itemsCategories}>
                <View style={[styles.cat, styles.active]}><Text style={styles.catText}>All</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Outdoor</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Indoor</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Office</Text></View>
                <View style={styles.cat}><Text style={styles.catText}>Garden</Text></View>
            </View>

            

        <ScrollView style={styles.itemsCOntainer} >
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Docksta table</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 299.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Ektorp sofa</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 450.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Poäng armchair</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 510.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Billy bookcase</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 240.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Kallax sofa</Text>
                            <View style={styles.priceBtn}>
                                <Text  style={styles.priceText}>GHC 309.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>coffee tables</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 499.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Swedish Desk</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 290.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Scandinavian Bed</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 255.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Norwegian vase</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 80.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Sladda Table</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 130.00</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}></View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Krossa Armchair</Text>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 280.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>PURCHASE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
        </ScrollView>
    

        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor:"#fffafa",
        justifyContent: "center",
        alignItems: 'center',
    },
    itemsCOntainer: {
        width: '100%',
        paddingVertical:10,
        marginTop: 10,
        
    },

    items:{
        width: "90%",
        flexDirection: 'row',
        paddingHorizontal:10,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 25,
        marginLeft: 20,
        backgroundColor: "#fff"
    },

    itemsCategories:{
        width: '95%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "space-around",


    },
    cat:{
        width: "17%",
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: "#52b788",
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catText:{
        fontSize: 10,
    },

    active: {
        backgroundColor: '#b7e4c7',
    },

    itemImg:{
        width: "50%",
        height: 150,
        // borderColor: "#6d6875",
        borderRadius: 20,
        // borderWidth: .5,
        marginRight: 20,
        backgroundColor: '#E3E9F3',
    },
    itemInfo:{
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    productName:{
        fontSize: 17,
        fontWeight: 'bold',
        color: "#40916c",
    },
    priceBtn:{
        flexDirection: "column",
        alignItems: 'center',
    },
    PurchaseBtn:{
        backgroundColor: "#b7e4c7",
        borderRadius: 30,
        marginTop: 10,
    },
    PurchaseBtnText:{
        color: "#fff",
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    priceText:{
        color: "#40916c",
        fontWeight: "bold",
    },
    iconContainer:{
        width: "90%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 50,
    },

    searchContainer:{
        width:"60%",
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    searchText:{
        width: '70%',
        paddingHorizontal: 20,
    },

    titleContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        padding: 5,
        color: '#40916c',
    },
})
