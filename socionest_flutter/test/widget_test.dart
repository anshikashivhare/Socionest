import 'package:flutter_test/flutter_test.dart';
import 'package:socionest_flutter/main.dart';

void main() {
  testWidgets('shows SocioNest role selector', (tester) async {
    await tester.pumpWidget(const SocioNestApp());
    expect(find.text('SocioNest'), findsOneWidget);
    expect(find.text('Continue as'), findsOneWidget);
    for (final role in ['Resident', 'Worker', 'Security', 'Admin']) {
      expect(find.text(role), findsOneWidget);
    }
  });
}
