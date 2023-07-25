import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

import { 
  Stack, 
  useRouter, 
  useSearchParams 
} from 'expo-router';

import { 
  Company, 
  JobAbout, 
  JobFooter, 
  JobTabs, 
  ScreenHeaderBtn,
  Specifics
} from '../../components';

import React, { useState, useEffect, useCallback } from 'react';
import { COLORS, icons, SIZES, data } from '../../constants';

const JobDetails = () => {

  const params = useSearchParams();
  console.log(params);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  /* const [itemData, setItemData] = useState(data.data[params.id]); */
  const itemData = data[`${params.id}`]

  const tabs = ["About", "Qualifications", "Responsibilities"]

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefreshing(false)
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return <Specifics 
          title="Qualifications"
          points={itemData.job_highlights.Qualifications ?? ["N/A"]}
        />
      case "About":
        return <JobAbout 
          info={itemData.job_description ?? "No Data provided"}
        />
      case "Responsibilities":
        return <Specifics 
          title="Responsibilites"
          points={itemData.job_highlights.Responsibilities ?? ["N/A"]}
        />
      default:
        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.hello}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.hello},
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.share}
              dimension="60%"
            />
          ),
          headerTitle: ""
        }}
      />
      <>
        <ScrollView showsHorizontalScrollIndicator={false} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary}/>
          ) : error ? (
            <Text>Something went wrong!</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company 
                companyLogo={itemData.employer_logo}
                jobTitle={itemData.job_title}
                companyName={itemData.employer_name}
                location={itemData.job_country}
              />
              <JobTabs 
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter url={/* itemData.job_google_link ??  */"https://careers.google.com/jobs/results"}/>
      </>
    </SafeAreaView>
  )
}

export default JobDetails