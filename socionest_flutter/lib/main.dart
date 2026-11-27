import 'package:flutter/material.dart';

void main() => runApp(const SocioNestApp());

class SocioNestApp extends StatelessWidget {
  const SocioNestApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
        title: 'SocioNest',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF176B60)),
          useMaterial3: true,
          scaffoldBackgroundColor: const Color(0xFFF5F7F6),
        ),
        home: const RoleHomePage(),
      );
}

class RoleHomePage extends StatefulWidget {
  const RoleHomePage({super.key});

  @override
  State<RoleHomePage> createState() => _RoleHomePageState();
}

class _RoleHomePageState extends State<RoleHomePage> {
  String selectedRole = 'Resident';
  static const roles = ['Resident', 'Worker', 'Security', 'Admin'];

  String get heading => switch (selectedRole) {
        'Worker' => 'Your work, organised.',
        'Security' => 'Society gate overview.',
        'Admin' => 'Society at a glance.',
        _ => 'Welcome to your community.',
      };

  List<Map<String, String>> get shortcuts => switch (selectedRole) {
        'Worker' => [
            {'icon': '🧰', 'title': 'My jobs', 'detail': 'View assigned work'},
            {'icon': '🕒', 'title': 'Availability', 'detail': 'Update your schedule'},
            {'icon': '⭐', 'title': 'My reviews', 'detail': 'See resident feedback'},
          ],
        'Security' => [
            {'icon': '🚪', 'title': 'Visitor entry', 'detail': 'Record a visitor'},
            {'icon': '📋', 'title': 'Visitor logs', 'detail': 'Review gate activity'},
            {'icon': '🚨', 'title': 'Alerts', 'detail': 'Check active alerts'},
          ],
        'Admin' => [
            {'icon': '👥', 'title': 'People', 'detail': 'Residents and staff'},
            {'icon': '🧾', 'title': 'Billing', 'detail': 'Bills and payments'},
            {'icon': '🛠️', 'title': 'Service requests', 'detail': 'Monitor open requests'},
          ],
        _ => [
            {'icon': '🛠️', 'title': 'Request a service', 'detail': 'Find society workers'},
            {'icon': '💳', 'title': 'Bills & payments', 'detail': 'Track your dues'},
            {'icon': '🏡', 'title': 'Facilities', 'detail': 'Book shared amenities'},
          ],
      };

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Text('SocioNest', style: TextStyle(fontWeight: FontWeight.w800)),
          actions: [
            IconButton(
              tooltip: 'Notifications',
              onPressed: () => _message('Notifications will appear here.'),
              icon: const Icon(Icons.notifications_none_rounded),
            ),
            const SizedBox(width: 8),
          ],
        ),
        body: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(20),
            children: [
              Container(
                padding: const EdgeInsets.all(22),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [Color(0xFF145C53), Color(0xFF258779)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('YOUR COMMUNITY, CONNECTED',
                        style: TextStyle(color: Colors.white70, letterSpacing: 1.2, fontSize: 11)),
                    const SizedBox(height: 12),
                    Text(heading, style: const TextStyle(
                      color: Colors.white, fontSize: 25, fontWeight: FontWeight.bold)),
                    const SizedBox(height: 8),
                    const Text('A simpler way to manage everyday society life.',
                        style: TextStyle(color: Colors.white70)),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              const Text('Continue as', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
              const SizedBox(height: 12),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: roles.map((role) => ChoiceChip(
                  label: Text(role),
                  selected: selectedRole == role,
                  onSelected: (_) => setState(() => selectedRole = role),
                )).toList(),
              ),
              const SizedBox(height: 24),
              Text('$selectedRole dashboard',
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 12),
              ...shortcuts.map((item) => Card(
                elevation: 0,
                margin: const EdgeInsets.only(bottom: 10),
                child: ListTile(
                  contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                  leading: CircleAvatar(
                    backgroundColor: const Color(0xFFE4F1EE),
                    child: Text(item['icon']!, style: const TextStyle(fontSize: 20)),
                  ),
                  title: Text(item['title']!, style: const TextStyle(fontWeight: FontWeight.w600)),
                  subtitle: Text(item['detail']!),
                  trailing: const Icon(Icons.chevron_right_rounded),
                  onTap: () => _message('${item['title']} is on the prototype roadmap.'),
                ),
              )),
              const SizedBox(height: 8),
              const Text('Prototype mode • Sample data only',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.black54, fontSize: 12)),
            ],
          ),
        ),
      );

  void _message(String value) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(value)));
  }
}
