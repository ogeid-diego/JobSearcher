import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES, data } from '../../constants'
import styles from '../../styles/search'

const JobSearch = () => {
    const searchParams = useSearchParams();
    const router = useRouter()

    const items = data.filter(item => item.job_title.includes(searchParams.id) || item.job_employment_type.includes(searchParams.id));
    console.log(items)
    const [searchLoader, setSearchLoader] = useState(false);

    useEffect(() => {
        setSearchLoader(true)
        setTimeout(() => {
            setSearchLoader(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.greenBackground }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.greenBackground },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            {
                searchLoader
                ?   <View style={styles.loaderContainer}>
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    </View>
                : <FlatList
                data={items}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{searchParams.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <Text style={styles.paginationText}>DiegoDev Tech Projects</Text>
                    </View>
                )}
            />
            }
        </SafeAreaView>
    )
}

export default JobSearch