// src/screens/DashboardScreen.js
import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
  Dimensions, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors, Spacing, Radius, Typography } from '../theme';

const { width } = Dimensions.get('window');

const JOBS = [
  { id: '1', service: 'Deep Home Cleaning', customer: 'Anita Verma', address: 'Sector 18, Noida', time: 'Today, 10:00 AM', amount: '₹1,200', status: 'upcoming', icon: 'sparkles' },
  { id: '2', service: 'AC Service & Repair', customer: 'Rohit Gupta', address: 'DLF Phase 2, Gurgaon', time: 'Today, 2:30 PM', amount: '₹850', status: 'upcoming', icon: 'snow' },
  { id: '3', service: 'Plumbing Repair', customer: 'Meera Singh', address: 'Vasant Kunj, Delhi', time: 'Yesterday', amount: '₹650', status: 'completed', icon: 'water' },
  { id: '4', service: 'Electrical Wiring', customer: 'Karan Malhotra', address: 'Indiranagar, Bengaluru', time: 'Yesterday', amount: '₹900', status: 'completed', icon: 'flash' },
];

const STATUS_COLORS = {
  upcoming: { bg: '#EFF6FF', text: Colors.primary },
  completed: { bg: '#DCFCE7', text: '#16A34A' },
  cancelled: { bg: '#FEF2F2', text: '#DC2626' },
};

export default function DashboardScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? JOBS : JOBS.filter((j) => j.status === activeTab);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <LinearGradient colors={[Colors.primary, '#1e3a8a']} style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Good morning 👋</Text>
              <Text style={styles.partnerName}>Ramesh Kumar</Text>
            </View>
            <TouchableOpacity style={styles.notifBtn}>
              <Ionicons name="notifications-outline" size={22} color={Colors.white} />
              <View style={styles.notifDot} />
            </TouchableOpacity>
          </View>

          {/* Online Toggle */}
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>You are Online — accepting jobs</Text>
            <TouchableOpacity style={styles.toggleBtn}>
              <Text style={styles.toggleBtnText}>Go Offline</Text>
            </TouchableOpacity>
          </View>

          {/* Stats Cards */}
          <View style={styles.statsRow}>
            {[
              { label: "Today's Earnings", value: '₹2,050', icon: 'wallet', color: '#34D399' },
              { label: 'Jobs Done', value: '2', icon: 'checkmark-circle', color: '#60A5FA' },
              { label: 'Rating', value: '4.9★', icon: 'star', color: '#FBBF24' },
            ].map((stat, i) => (
              <View key={i} style={styles.statCard}>
                <Ionicons name={stat.icon} size={18} color={stat.color} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* Earnings Banner */}
        <View style={styles.earningsBanner}>
          <View>
            <Text style={styles.earningsBannerLabel}>This Month's Earnings</Text>
            <Text style={styles.earningsBannerValue}>₹28,400</Text>
          </View>
          <View style={styles.earningsBannerRight}>
            <Text style={styles.earningsBannerGrowth}>↑ 12% vs last month</Text>
            <TouchableOpacity>
              <Text style={styles.earningsBannerLink}>View Details →</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Jobs Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Jobs</Text>

          {/* Tabs */}
          <View style={styles.tabs}>
            {['all', 'upcoming', 'completed'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Job Cards */}
          {filtered.map((job) => {
            const statusStyle = STATUS_COLORS[job.status] || STATUS_COLORS.upcoming;
            return (
              <TouchableOpacity key={job.id} style={styles.jobCard} activeOpacity={0.8}>
                <View style={styles.jobIconWrap}>
                  <Ionicons name={job.icon} size={22} color={Colors.primary} />
                </View>
                <View style={styles.jobBody}>
                  <View style={styles.jobTop}>
                    <Text style={styles.jobService}>{job.service}</Text>
                    <View style={[styles.jobStatus, { backgroundColor: statusStyle.bg }]}>
                      <Text style={[styles.jobStatusText, { color: statusStyle.text }]}>{job.status}</Text>
                    </View>
                  </View>
                  <Text style={styles.jobCustomer}>{job.customer}</Text>
                  <Text style={styles.jobAddress}>
                    <Ionicons name="location-outline" size={11} color={Colors.textMuted} /> {job.address}
                  </Text>
                  <View style={styles.jobBottom}>
                    <Text style={styles.jobTime}>
                      <Ionicons name="time-outline" size={11} color={Colors.textMuted} /> {job.time}
                    </Text>
                    <Text style={styles.jobAmount}>{job.amount}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {[
              { icon: 'calendar', label: 'My Schedule', color: '#3B82F6' },
              { icon: 'chatbubble-ellipses', label: 'Support Chat', color: '#8B5CF6' },
              { icon: 'person', label: 'My Profile', color: '#F59E0B' },
              { icon: 'document-text', label: 'Documents', color: '#10B981' },
            ].map((a, i) => (
              <TouchableOpacity key={i} style={styles.quickAction} activeOpacity={0.8}>
                <View style={[styles.quickActionIcon, { backgroundColor: a.color + '20' }]}>
                  <Ionicons name={a.icon} size={22} color={a.color} />
                </View>
                <Text style={styles.quickActionLabel}>{a.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.surface },
  header: { paddingTop: 52, paddingBottom: Spacing.xxl, paddingHorizontal: Spacing.lg },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: Spacing.md },
  greeting: { color: 'rgba(255,255,255,0.75)', fontSize: 13 },
  partnerName: { color: Colors.white, fontSize: 22, fontWeight: '800' },
  notifBtn: { position: 'relative', padding: 4 },
  notifDot: { position: 'absolute', top: 4, right: 4, width: 8, height: 8, borderRadius: 4, backgroundColor: '#F87171', borderWidth: 1, borderColor: Colors.white },
  onlineRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: Radius.lg, padding: Spacing.sm, marginBottom: Spacing.md },
  onlineDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#34D399' },
  onlineText: { flex: 1, color: 'rgba(255,255,255,0.85)', fontSize: 12 },
  toggleBtn: { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: Radius.full, paddingHorizontal: 10, paddingVertical: 4 },
  toggleBtnText: { color: Colors.white, fontSize: 11, fontWeight: '600' },
  statsRow: { flexDirection: 'row', gap: Spacing.sm },
  statCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: Radius.lg, padding: Spacing.sm, alignItems: 'center', gap: 4 },
  statValue: { color: Colors.white, fontSize: 16, fontWeight: '800' },
  statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 10, textAlign: 'center' },

  earningsBanner: {
    margin: Spacing.md,
    marginTop: -Spacing.xl,
    backgroundColor: Colors.surfaceCard,
    borderRadius: Radius.xl,
    padding: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, elevation: 4,
  },
  earningsBannerLabel: { fontSize: 12, color: Colors.textSecondary },
  earningsBannerValue: { fontSize: 26, fontWeight: '800', color: Colors.textPrimary, marginTop: 2 },
  earningsBannerRight: { alignItems: 'flex-end' },
  earningsBannerGrowth: { fontSize: 12, color: '#16A34A', fontWeight: '600' },
  earningsBannerLink: { fontSize: 12, color: Colors.primary, fontWeight: '600', marginTop: 6 },

  section: { backgroundColor: Colors.surfaceCard, marginHorizontal: Spacing.md, marginBottom: Spacing.md, borderRadius: Radius.xl, padding: Spacing.md, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: Colors.textPrimary, marginBottom: Spacing.md },

  tabs: { flexDirection: 'row', backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: 4, marginBottom: Spacing.md },
  tab: { flex: 1, paddingVertical: 8, borderRadius: Radius.md, alignItems: 'center' },
  tabActive: { backgroundColor: Colors.surfaceCard, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 4, elevation: 2 },
  tabText: { fontSize: 12, fontWeight: '600', color: Colors.textMuted },
  tabTextActive: { color: Colors.primary },

  jobCard: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.sm, paddingVertical: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.border },
  jobIconWrap: { width: 44, height: 44, borderRadius: Radius.full, backgroundColor: Colors.primaryLight, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  jobBody: { flex: 1 },
  jobTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 },
  jobService: { fontSize: 14, fontWeight: '700', color: Colors.textPrimary, flex: 1 },
  jobStatus: { borderRadius: Radius.full, paddingHorizontal: 8, paddingVertical: 3, marginLeft: 6 },
  jobStatusText: { fontSize: 10, fontWeight: '700', textTransform: 'capitalize' },
  jobCustomer: { fontSize: 13, color: Colors.textSecondary, marginBottom: 3 },
  jobAddress: { fontSize: 11, color: Colors.textMuted, marginBottom: 6 },
  jobBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  jobTime: { fontSize: 11, color: Colors.textMuted },
  jobAmount: { fontSize: 15, fontWeight: '800', color: Colors.textPrimary },

  quickActionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  quickAction: { width: (width - Spacing.md * 2 - Spacing.md * 2 - Spacing.sm) / 2, alignItems: 'center', padding: Spacing.md, backgroundColor: Colors.surface, borderRadius: Radius.xl },
  quickActionIcon: { width: 48, height: 48, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  quickActionLabel: { fontSize: 12, fontWeight: '600', color: Colors.textPrimary, textAlign: 'center' },
});
