// src/screens/HomeScreen.js
import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Colors, Spacing, Radius, Typography } from '../theme';
import Button from '../components/Button';

const { width } = Dimensions.get('window');

// ─── PartnerHero ─────────────────────────────────────────────────────────────
function PartnerHero({ onBecomePartner, onLogin }) {
  return (
    <LinearGradient
      colors={['#1D4ED8', '#1E40AF', '#1e3a8a']}
      style={styles.hero}
    >
      <StatusBar barStyle="light-content" backgroundColor="#1D4ED8" />

      {/* Badge */}
      <View style={styles.heroBadge}>
        <Text style={styles.heroBadgeText}>FOR PROFESSIONALS</Text>
      </View>

      <Text style={styles.heroTitle}>
        Earn more.{'\n'}Work better.{'\n'}
        <Text style={styles.heroTitleAccent}>Be your own boss.</Text>
      </Text>

      <Text style={styles.heroSubtitle}>
        Join thousands of professionals earning ₹50,000 – ₹1,00,000+ every month with Urban Partner.
      </Text>

      {/* CTA Buttons */}
      <View style={styles.heroButtons}>
        <TouchableOpacity style={styles.heroPrimaryBtn} onPress={onBecomePartner} activeOpacity={0.85}>
          <Text style={styles.heroPrimaryBtnText}>Become a Partner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.heroSecondaryBtn} onPress={onLogin} activeOpacity={0.85}>
          <Text style={styles.heroSecondaryBtnText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.8★</Text>
          <Text style={styles.statLabel}>Partner Rating</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12,450+</Text>
          <Text style={styles.statLabel}>Active Partners</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>₹2.8 Cr+</Text>
          <Text style={styles.statLabel}>Paid this month</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

// ─── Benefits ────────────────────────────────────────────────────────────────
const BENEFITS = [
  { icon: 'cash', iconLib: 'ionicons', title: 'High Earnings', desc: 'Earn ₹50k – ₹1 Lakh+ per month' },
  { icon: 'calendar', iconLib: 'ionicons', title: 'Flexible Schedule', desc: 'Work when you want' },
  { icon: 'rocket', iconLib: 'ionicons', title: 'Get More Jobs', desc: 'We send you verified leads' },
  { icon: 'shield-checkmark', iconLib: 'ionicons', title: 'Insurance & Support', desc: 'Covered by partner insurance' },
  { icon: 'phone-portrait', iconLib: 'ionicons', title: 'Smart App', desc: 'Easy job management & payments' },
  { icon: 'star', iconLib: 'ionicons', title: 'Growth', desc: 'Training & skill development' },
];

function Benefits() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Why Join Us?</Text>
      <Text style={styles.sectionSubtitle}>
        We take care of everything so you can focus on delivering great service
      </Text>
      <View style={styles.benefitsGrid}>
        {BENEFITS.map((b, i) => (
          <View key={i} style={styles.benefitCard}>
            <View style={styles.benefitIconWrap}>
              <Ionicons name={b.icon} size={24} color={Colors.primary} />
            </View>
            <Text style={styles.benefitTitle}>{b.title}</Text>
            <Text style={styles.benefitDesc}>{b.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// ─── HowItWorks ──────────────────────────────────────────────────────────────
const STEPS = [
  { num: '01', title: 'Sign Up & Verify', desc: 'Complete your profile and documents', icon: 'person-add' },
  { num: '02', title: 'Choose Services', desc: 'Select the services you provide', icon: 'construct' },
  { num: '03', title: 'Get Job Leads', desc: 'Receive nearby verified customer requests', icon: 'briefcase' },
  { num: '04', title: 'Complete & Earn', desc: 'Deliver service and get paid instantly', icon: 'wallet' },
];

function HowItWorks() {
  return (
    <View style={[styles.section, styles.sectionAlt]}>
      <Text style={styles.sectionTitle}>How it Works</Text>
      <Text style={styles.sectionSubtitle}>Just 4 simple steps to start earning</Text>
      {STEPS.map((step, i) => (
        <View key={i} style={styles.stepRow}>
          <View style={styles.stepNumWrap}>
            <Text style={styles.stepNum}>{step.num}</Text>
          </View>
          <View style={styles.stepIconWrap}>
            <Ionicons name={step.icon} size={22} color={Colors.primary} />
          </View>
          <View style={styles.stepText}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDesc}>{step.desc}</Text>
          </View>
          {i < STEPS.length - 1 && <View style={styles.stepConnector} />}
        </View>
      ))}
    </View>
  );
}

// ─── Earnings ─────────────────────────────────────────────────────────────────
function Earnings() {
  const earningsData = [
    { role: 'Plumbers', range: '₹70k – ₹1.1L' },
    { role: 'Electricians', range: '₹65k – ₹95k' },
    { role: 'Cleaners', range: '₹45k – ₹75k' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Real Earnings, Real Freedom</Text>
      <View style={styles.earningsCard}>
        <LinearGradient colors={['#16A34A', '#15803D']} style={styles.earningsMain}>
          <Text style={styles.earningsBig}>₹85,000</Text>
          <Text style={styles.earningsCaption}>Average monthly earning of top partners</Text>
        </LinearGradient>
        <View style={styles.earningsBreakdown}>
          {earningsData.map((e, i) => (
            <View key={i} style={[styles.earningsItem, i < earningsData.length - 1 && styles.earningsItemBorder]}>
              <Text style={styles.earningsRole}>{e.role}</Text>
              <Text style={styles.earningsRange}>{e.range}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Ramesh Kumar', service: 'Plumber', text: 'I earn more in a week now than I used to in a month. The app is very easy to use.' },
  { name: 'Priya Sharma', service: 'Beauty Expert', text: 'Urban Partner helped me grow my business. I now have regular clients who trust me.' },
  { name: 'Suresh Patel', service: 'Electrician', text: 'The verified leads are genuine. My income doubled within the first 3 months.' },
];

function Testimonials() {
  return (
    <View style={[styles.section, styles.sectionAlt]}>
      <Text style={styles.sectionTitle}>What Our Partners Say</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: Spacing.md }}>
        {TESTIMONIALS.map((t, i) => (
          <View key={i} style={styles.testimonialCard}>
            <View style={styles.quoteIcon}>
              <Text style={styles.quoteChar}>"</Text>
            </View>
            <Text style={styles.testimonialText}>"{t.text}"</Text>
            <View style={styles.testimonialAuthor}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitial}>{t.name[0]}</Text>
              </View>
              <View>
                <Text style={styles.testimonialName}>{t.name}</Text>
                <Text style={styles.testimonialService}>{t.service}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// ─── HomeScreen ───────────────────────────────────────────────────────────────
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PartnerHero
        onBecomePartner={() => navigation.navigate('Register')}
        onLogin={() => navigation.navigate('Login')}
      />
      <Benefits />
      <HowItWorks />
      <Earnings />
      <Testimonials />

      {/* Final CTA */}
      <LinearGradient colors={[Colors.primary, '#1e3a8a']} style={styles.finalCta}>
        <Text style={styles.finalCtaTitle}>Ready to start earning?</Text>
        <Text style={styles.finalCtaSub}>Join 12,000+ professionals on Urban Partner</Text>
        <TouchableOpacity
          style={styles.finalCtaBtn}
          onPress={() => navigation.navigate('Register')}
          activeOpacity={0.85}
        >
          <Text style={styles.finalCtaBtnText}>Register Now — It's Free</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.surface },

  // Hero
  hero: { padding: Spacing.lg, paddingTop: 56, paddingBottom: Spacing.xxl },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: Radius.full,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: Spacing.md,
  },
  heroBadgeText: { color: Colors.white, fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  heroTitle: { fontSize: 34, fontWeight: '800', color: Colors.white, lineHeight: 42, marginBottom: Spacing.md },
  heroTitleAccent: { color: '#93C5FD' },
  heroSubtitle: { fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 22, marginBottom: Spacing.xl },
  heroButtons: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.xl },
  heroPrimaryBtn: {
    flex: 1, backgroundColor: Colors.white, borderRadius: Radius.xl,
    paddingVertical: 14, alignItems: 'center',
  },
  heroPrimaryBtnText: { color: Colors.primary, fontWeight: '700', fontSize: 15 },
  heroSecondaryBtn: {
    flex: 1, borderRadius: Radius.xl, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.5)',
    paddingVertical: 14, alignItems: 'center',
  },
  heroSecondaryBtnText: { color: Colors.white, fontWeight: '600', fontSize: 15 },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: Radius.xl,
    padding: Spacing.md,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statNumber: { color: Colors.white, fontSize: 20, fontWeight: '800' },
  statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 2, textAlign: 'center' },
  statDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 4 },

  // Sections
  section: { backgroundColor: Colors.surfaceCard, paddingVertical: Spacing.xl, paddingHorizontal: 0 },
  sectionAlt: { backgroundColor: Colors.surface },
  sectionTitle: { ...Typography.h2, textAlign: 'center', marginBottom: Spacing.xs, paddingHorizontal: Spacing.md },
  sectionSubtitle: { ...Typography.body, textAlign: 'center', marginBottom: Spacing.xl, paddingHorizontal: Spacing.lg },

  // Benefits
  benefitsGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: Spacing.md, gap: Spacing.sm },
  benefitCard: {
    width: (width - Spacing.md * 2 - Spacing.sm) / 2,
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.md,
  },
  benefitIconWrap: {
    width: 44, height: 44, borderRadius: Radius.full,
    backgroundColor: Colors.primaryLight, alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  benefitTitle: { fontSize: 15, fontWeight: '700', color: Colors.textPrimary, marginBottom: 4 },
  benefitDesc: { fontSize: 12, color: Colors.textSecondary, lineHeight: 18 },

  // How It Works
  stepRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: Spacing.lg, marginBottom: Spacing.md },
  stepNumWrap: { width: 36, height: 36, borderRadius: Radius.full, backgroundColor: Colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginRight: Spacing.sm },
  stepNum: { fontSize: 13, fontWeight: '800', color: Colors.primary },
  stepIconWrap: { width: 44, height: 44, borderRadius: Radius.full, backgroundColor: Colors.surfaceCard, alignItems: 'center', justifyContent: 'center', marginRight: Spacing.md, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 },
  stepText: { flex: 1 },
  stepTitle: { fontSize: 15, fontWeight: '700', color: Colors.textPrimary },
  stepDesc: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  stepConnector: { display: 'none' },

  // Earnings
  earningsCard: { marginHorizontal: Spacing.md, borderRadius: Radius.xxl, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, elevation: 4 },
  earningsMain: { padding: Spacing.xl, alignItems: 'center' },
  earningsBig: { fontSize: 52, fontWeight: '900', color: Colors.white, letterSpacing: -1 },
  earningsCaption: { color: 'rgba(255,255,255,0.85)', fontSize: 14, marginTop: 6, textAlign: 'center' },
  earningsBreakdown: { backgroundColor: Colors.surfaceCard, flexDirection: 'row' },
  earningsItem: { flex: 1, padding: Spacing.md, alignItems: 'center' },
  earningsItemBorder: { borderRightWidth: 1, borderRightColor: Colors.border },
  earningsRole: { fontSize: 13, fontWeight: '700', color: Colors.textPrimary },
  earningsRange: { fontSize: 12, color: Colors.textSecondary, marginTop: 3 },

  // Testimonials
  testimonialCard: {
    width: width * 0.75,
    backgroundColor: Colors.surfaceCard,
    borderRadius: Radius.xxl,
    padding: Spacing.lg,
    marginRight: Spacing.md,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2,
  },
  quoteIcon: { marginBottom: Spacing.sm },
  quoteChar: { fontSize: 40, color: Colors.primaryLight, fontWeight: '900', lineHeight: 40 },
  testimonialText: { fontSize: 14, color: Colors.textSecondary, lineHeight: 22, marginBottom: Spacing.md, fontStyle: 'italic' },
  testimonialAuthor: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  avatarCircle: { width: 38, height: 38, borderRadius: Radius.full, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  avatarInitial: { color: Colors.white, fontWeight: '800', fontSize: 16 },
  testimonialName: { fontSize: 14, fontWeight: '700', color: Colors.textPrimary },
  testimonialService: { fontSize: 12, color: Colors.textSecondary },

  // Final CTA
  finalCta: { margin: Spacing.md, borderRadius: Radius.xxl, padding: Spacing.xl, alignItems: 'center' },
  finalCtaTitle: { fontSize: 24, fontWeight: '800', color: Colors.white, textAlign: 'center', marginBottom: 6 },
  finalCtaSub: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: Spacing.xl, textAlign: 'center' },
  finalCtaBtn: { backgroundColor: Colors.white, borderRadius: Radius.xl, paddingVertical: 14, paddingHorizontal: Spacing.xl },
  finalCtaBtnText: { color: Colors.primary, fontWeight: '700', fontSize: 15 },
});
